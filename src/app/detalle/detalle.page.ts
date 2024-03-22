import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from '../services/peliculas.service';
import { PeliculasAPIService } from '../services/peliculas-api.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {
  pelicula: any = {};
  constructor(private activatedRoute: ActivatedRoute, private peliculasService: PeliculasService, private peliculasApiService: PeliculasAPIService) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.peliculasApiService.getPelicula(id).subscribe(
      result => {
        this.pelicula = result;
      },
      err => {
        console.log(err);
      });
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter DetallePage');
  }

}
