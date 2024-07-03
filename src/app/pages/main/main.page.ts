import { Component, OnInit, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Icon } from 'ionicons/dist/types/components/icon/icon';
import { user } from 'src/app/models/user.model';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  pages =[
    {title:'Perfil',url:'/main/profile',icon:'person-outline'},
    {title:'Gestion',url:'/main/gestion',icon:'person-outline'},
    {title:'Citas Concluidas',url:'/main/cita-concluida',icon: 'medical-outline'},
    {title:'Citas Pendientes',url:'/main/cita-pendiente',icon: 'medical-outline'},
    
]

 router = inject(Router);
 firebaseSvc = inject(FirebaseService);
 utilsSvc = inject(UtilsService);


 currentPath: string ='';


  ngOnInit() {
    this.router.events.subscribe((event: any)=>{
      if(event?.url) this.currentPath = event.url;
    })
  }


  user(): user {
    return this.utilsSvc.getFromLocalStorage('users');
  }


//cerrar sesion
  singOut(){
    this.firebaseSvc.sigOut();
  }

}
