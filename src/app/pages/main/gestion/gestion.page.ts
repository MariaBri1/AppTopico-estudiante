import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.page.html',
  styleUrls: ['./gestion.page.scss'],
})
export class GestionPage implements OnInit {
 

  transactions: any[] = [
    {id: 1, vendor: 'Turno Mañana', image: '',  time: '7:00AM - 12:00 PM'},
    {id: 2, vendor: 'Turno Tarde', image: '', time: '1:00PM - 9:00 PM'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
