import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PeliculasService } from '../services/peliculas.service';
import { PeliculasAPIService } from '../services/peliculas-api.service';


@Component({
  selector: 'app-videoclub',
  templateUrl: './videoclub.page.html',
  styleUrls: ['./videoclub.page.scss'],
})
export class VideoclubPage implements OnInit {
  listaPeliculas: any = [];
  modoLista: boolean = true;
  constructor(private router: Router, private peliculasService: PeliculasService, private peliculasAPIService: PeliculasAPIService) {
    peliculasAPIService.getPeliculas().subscribe(
      result => {
        this.listaPeliculas = result;
      },
      err => {
        console.log(err);
      }
    );
  }

  ngOnInit() {
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter VideoclubPage');
  }

  verPaginaDetalle(id: any): void {
    this.router.navigate(['/detalle', id]);
  }

  cambiarVista() {
    this.modoLista = !this.modoLista;
  }

}
