import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doc-dentista',
  templateUrl: './doc.page.html',
  styleUrls: ['./doc.page.scss'],
})
export class DocPage implements OnInit {
  doctors = [
    {
      avatar: 'ruta/a/avatar1.png',
      name: 'Dr. Apellido N. Apellido',
      designation: 'Director de Dept',
      email: 'apellido@dominio.com'
    },
  ]
  constructor() { }
  ngOnInit() {
  }

}
