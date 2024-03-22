import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-autor',
  templateUrl: './autor.page.html',
  styleUrls: ['./autor.page.scss'],
})
export class AutorPage implements OnInit {
  autor: {
    name: string,
    email: string,
    twitter: string,
    phone: string
  };
  constructor() {
    this.autor = {
      name: 'Alban Loubet Vergara',
      email: 'alban.loubet@gmail.com',
      twitter: '@albanloubet',
      phone: '676584366'
    }
  }

  ngOnInit() {
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter AutorPage');
  }

}
