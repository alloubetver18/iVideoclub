import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
  private peliculas: {
    title: string,
    year: string,
    director: string,
    poster: string,
    synopsis: string
  }[] = [];
  constructor() {
    /** */
    this.peliculas = [
      {
        "title": "El padrino",
        "year": "1972",
        "director": "Francis Ford Coppola",
        "poster": "http://gbrain.dlsi.ua.es/videoclub/assets/imgs/posters/MV5BMjEyMjcyNDI4MF5BMl5BanBnXkFtZTcwMDA5Mzg3OA@@._V1_SX214_AL_.jpg",
        "synopsis": "Don Vito Corleone (Marlon Brando) es el respetado y temido jefe de una de las cinco familias de la mafia de Nueva York. Tiene cuatro hijos: Connie (Talia Shire), el impulsivo Sonny (James Caan), el pusilánime Freddie (John Cazale) y Michael (Al Pacino), que no quiere saber nada de los negocios de su padre. Cuando Corleone, en contra de los consejos de 'Il consigliere' Tom Hagen (Robert Duvall), se niega a intervenir en el negocio de las drogas, el jefe de otra banda ordena su asesinato. Empieza entonces una violenta y cruenta guerra entre las familias mafiosas.",
      },
      {
        "title": "El Padrino. Parte II",
        "year": "1974",
        "director": "Francis Ford Coppola",
        "poster": "http://gbrain.dlsi.ua.es/videoclub/assets/imgs/posters/MV5BNDc2NTM3MzU1Nl5BMl5BanBnXkFtZTcwMTA5Mzg3OA@@._V1_SX214_AL_.jpg",
        "synopsis": "Continuación de la historia de los Corleone por medio de dos historias paralelas: la elección de Michael Corleone como jefe de los negocios familiares y los orígenes del patriarca, el ya fallecido Don Vito, primero en Sicilia y luego en Estados Unidos, donde, empezando desde abajo, llegó a ser un poderosísimo jefe de la mafia de Nueva York.",
      },
      {
        "title": "La lista de Schindler",
        "year": "1993",
        "director": "Steven Spielberg",
        "poster": "http://gbrain.dlsi.ua.es/videoclub/assets/imgs/posters/MV5BMzMwMTM4MDU2N15BMl5BanBnXkFtZTgwMzQ0MjMxMDE@._V1_SX214_AL_.jpg",
        "synopsis": "Segunda Guerra Mundial (1939-1945). Oskar Schindler (Liam Neeson), un hombre de enorme astucia y talento para las relaciones públicas, organiza un ambicioso plan para ganarse la simpatía de los nazis. Después de la invasión de Polonia por los alemanes (1939), consigue, gracias a sus relaciones con los nazis, la propiedad de una fábrica de Cracovia. Allí emplea a cientos de operarios judíos, cuya explotación le hace prosperar rápidamente. Su gerente (Ben Kingsley), también judío, es el verdadero director en la sombra, pues Schindler carece completamente de conocimientos para dirigir una empresa.",
      },
      {
        "title": "Pulp Fiction",
        "year": "1994",
        "director": "Quentin Tarantino",
        "poster": "http://gbrain.dlsi.ua.es/videoclub/assets/imgs/posters/MV5BMjE0ODk2NjczOV5BMl5BanBnXkFtZTYwNDQ0NDg4._V1_SY317_CR4,0,214,317_AL_.jpg",
        "synopsis": "Jules y Vincent, dos asesinos a sueldo con muy pocas luces, trabajan para Marsellus Wallace. Vincent le confiesa a Jules que Marsellus le ha pedido que cuide de Mia, su mujer. Jules le recomienda prudencia porque es muy peligroso sobrepasarse con la novia del jefe. Cuando llega la hora de trabajar, ambos deben ponerse manos a la obra. Su misión: recuperar un misterioso maletín. ",
      }];
  }

  getPeliculas() {
    return this.peliculas;
  }

  getPelicula(id: any): any {
    return this.peliculas[id];
  }
}
