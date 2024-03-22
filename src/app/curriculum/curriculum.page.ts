import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.page.html',
  styleUrls: ['./curriculum.page.scss'],
})
export class CurriculumPage implements OnInit {
  listaTrabajos: { fecha: string, desc: string }[] = [];
  constructor() {
    this.listaTrabajos = [
      {
        fecha: '2023-Actualidad',
        desc: 'Desarrollo de Aplicaciones Web. Actualmente en Formación en Centro de Trabajo'
      },
      {
        fecha: '2023',
        desc: 'Desarrollador de Aplicaciones Web Freelancer con Angular'
      },
      {
        fecha: '2014',
        desc: 'F.P.II Desarrollo de Aplicaciones Multiplataformas'
      },
      {
        fecha: '2010',
        desc: 'F.P.II Administración de Sistemas Informáticos'
      }
    ];

  }

  ngOnInit() {
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter CurriculumPage');
  }

}
