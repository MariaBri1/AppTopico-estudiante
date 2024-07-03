import { Component, OnInit, inject } from '@angular/core';
import { orderBy } from 'firebase/firestore';
import { Cita } from 'src/app/models/cita.model';
import { user } from 'src/app/models/user.model';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UtilsService } from 'src/app/services/utils.service';
import { AddUpdateCitaComponent } from 'src/app/shared/components/add-update-cita/add-update-cita.component';

@Component({
  selector: 'app-cita-pendiente',
  templateUrl: './cita-pendiente.page.html',
  styleUrls: ['./cita-pendiente.page.scss'],
})
export class CitaPendientePage implements OnInit {

  citas: Cita[] = [];
  loading: boolean = false;
  placeholders: number[] = Array(7).fill(1); // Define placeholders as an array of numbers

  firebaseSvc = inject(FirebaseService);
  utilsSvc = inject(UtilsService);

  ngOnInit() {
    this.getCitas();
  }

  ionViewWillEnter() {
    this.getCitas();
  }

  user(): user {
    return this.utilsSvc.getFromLocalStorage('user');
  }

  async doRefresh(event: any) {
    await this.getCitas();
    event.target.complete();
  }

  getCitasHoy(): Cita[] {
    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0);

    return this.citas.filter(cita => {
      const fechaCita = new Date(cita.fecha);
      fechaCita.setHours(0, 0, 0, 0);
      return fechaCita.getTime() === hoy.getTime();
    });
  }

  getCitas() {
    const path1 = `Estudiantes/${this.user().uid}/cita`;
    const path2 = `Estudiantes/${this.user().uid}/cita_dentista`;
    this.loading = true;

    const now = new Date();

    this.firebaseSvc.getCollecitionData(path1, [orderBy('fecha', 'desc')]).subscribe((citas1: Cita[]) => {
      this.firebaseSvc.getCollecitionData(path2, [orderBy('fecha', 'desc')]).subscribe((citas2: Cita[]) => {
        this.citas = [...citas1, ...citas2].filter(cita => new Date(`${cita.fecha}T${cita.hora}:00`) >= now);
        this.loading = false;
      }, (error: any) => {
        console.error(error);
        this.loading = false;
      });
    }, (error: any) => {
      console.error(error);
      this.loading = false;
    });
  }


  getCitaFields(cita: Cita): { label: string, value: any }[] {
    return [
      { label: 'Nombre', value: cita.name },
      { label: 'DNI', value: cita.dni },
      { label: 'Teléfono', value: cita.soldUnits },
      { label: 'Fecha', value: cita.fecha },
      { label: 'Hora', value: cita.hora },
      { label: 'Doctor', value: cita.doctor },
      { label: 'Dia', value: cita.dia },
      { label: 'Facultad', value: cita.facultad },
      { label: 'Correo', value: cita.email },
      { label: 'Especialidad', value: cita.tipo },
    ];
  }
}
