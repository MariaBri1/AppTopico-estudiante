import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { user } from 'src/app/models/user.model';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UtilsService } from 'src/app/services/utils.service';
import { Cita } from 'src/app/models/cita.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-update-cita-fisioterapeuta',
  templateUrl: './add-update-cita-fisioterapia.component.html',
  styleUrls: ['./add-update-cita-fisioterapia.component.scss'],
})
export class AddUpdateCitaFisioterapiaComponent implements OnInit {

  @Input() cita: Cita;

  // Define el formulario con todos los controles necesarios
  form = new FormGroup({
    id: new FormControl(''),
    image: new FormControl(''),
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    dni: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]),
    price: new FormControl(null),
    fecha: new FormControl(null, Validators.required),
    hora: new FormControl(null, Validators.required),
    doctor: new FormControl(null, Validators.required),
    dia: new FormControl(null, Validators.required),

    facultad: new FormControl(null, Validators.required),
    tipo: new FormControl('Fisioterapia'),
    soldUnits: new FormControl(null, Validators.required),
    email: new FormControl(null, [Validators.required, Validators.email]),
  });

  user = {} as user;
  doctors: string[] = ['Dr.Ivan Gutierrez', 'Dra.María García'];
  dias: { nombre: string, valor: string }[] = [
    { nombre: 'Lunes', valor: 'Lunes' },
    { nombre: 'Martes', valor: 'Martes' },
    { nombre: 'Miércoles', valor: 'Miércoles' },
    { nombre: 'Jueves', valor: 'Jueves' },
    { nombre: 'Viernes', valor: 'Viernes' },
    { nombre: 'Sábado', valor: 'Sábado' },
  ];

  constructor(
    private firebaseSvc: FirebaseService,
    private utilsSvc: UtilsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.user = this.utilsSvc.getFromLocalStorage('user');
    
    if (this.cita) {
      this.form.setValue(this.cita);
    } else {
      this.setUserDetails();
    }

    this.route.paramMap.subscribe(params => {
      const selectedHour = params.get('hora');
      const selectedDate = params.get('fecha');
      if (selectedHour) {
        this.form.controls.hora.setValue(selectedHour);
      }
      if (selectedDate) {
        this.form.controls.fecha.setValue(new Date(selectedDate)); // Convertir a Date
      }
    });
  }

  setUserDetails() {
    this.form.controls.name.setValue(this.user.name);
    this.form.controls.dni.setValue(this.user.dni);
    this.form.controls.soldUnits.setValue(this.user.phone);
    this.form.controls.facultad.setValue(this.user.facultad);
    this.form.controls.email.setValue(this.user.email);
  }

  async takeImage() {
    try {
      const dataUrl = (await this.utilsSvc.takePicture('imagen a cargar')).dataUrl;
      this.form.controls.image.setValue(dataUrl);
    } catch (error) {
      console.error('Error taking image', error);
    }
  }

  submit() {
    if (this.form.valid) {
      if (this.cita) {
        this.updateCita();
      } else {
        this.createCita();
      }
    }
  }

  setNumberInputs() {
    let { soldUnits, price } = this.form.controls;
    if (soldUnits.value) soldUnits.setValue(parseFloat(soldUnits.value));
    if (price.value) price.setValue(parseFloat(price.value));
  }

  async createCita() {
    const path = `Estudiantes/${this.user.uid}/cita`;
    const loading = await this.utilsSvc.loading();
    await loading.present();

    try {
      if (this.form.value.image) {
        const imageUrl = await this.uploadImage();
        this.form.controls.image.setValue(imageUrl);
      }

      delete this.form.value.id;
      await this.firebaseSvc.addDocument(path, this.form.value);
      this.utilsSvc.dismissModal({ success: true });
      this.presentToast('Cita creada exitosamente', 'success');
      this.router.navigate(['/main/gestion']);
    } catch (error) {
      console.error('Error creando cita', error);
      this.presentToast(error.message, 'danger');
    } finally {
      loading.dismiss();
    }
  }

  async updateCita() {
    const path = `Estudiante/${this.user.uid}/cita_fisioterapia/${this.cita.id}`;
    const loading = await this.utilsSvc.loading();
    await loading.present();

    try {
      if (this.form.value.image !== this.cita.image && this.form.value.image) {
        const imageUrl = await this.uploadImage();
        this.form.controls.image.setValue(imageUrl);
      }

      delete this.form.value.id;
      await this.firebaseSvc.updateDocument(path, this.form.value);
      this.utilsSvc.dismissModal({ success: true });
      this.presentToast('Cita actualizada exitosamente', 'success');
      this.router.navigate(['/ruta-deseada']);
    } catch (error) {
      console.error('Error actualizando cita', error);
      this.presentToast(error.message, 'danger');
    } finally {
      loading.dismiss();
    }
  }

  async uploadImage() {
    const dataUrl = this.form.value.image;
    const imagePath = `${this.user.uid}/${Date.now()}`;
    return await this.firebaseSvc.uploadImage(imagePath, dataUrl);
  }

  presentToast(message: string, color: 'success' | 'danger') {
    this.utilsSvc.presentToast({
      message,
      duration: 1500,
      color,
      position: 'middle',
      icon: color === 'success' ? 'checkmark-circle-outline' : 'alert-circle-outline',
    });
  }

  // Validador personalizado para asegurar que la fecha seleccionada no sea en el pasado
  validateDate(control: FormControl) {
    const selectedDate = new Date(control.value);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (selectedDate < today) {
      return { pastDate: true };
    }
    return null;
  }

  // Función para actualizar la fecha según el día seleccionado
  updateFechaFromDia() {
    const selectedDay = this.form.value.dia;
    const today = new Date();
    const days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    const targetDayIndex = days.findIndex(day => day.toLowerCase() === selectedDay.toLowerCase());

    if (targetDayIndex !== -1) {
      let nextDate = new Date(today);
      nextDate.setDate(today.getDate() + (targetDayIndex - today.getDay() + 7) % 7);

      // Formatea la fecha como YYYY-MM-DD (formato de input type="date")
      const formattedDate = nextDate.toISOString().substring(0, 10);
      this.form.controls.fecha.setValue(formattedDate);
    }
  }
}
