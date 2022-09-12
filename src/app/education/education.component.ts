import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  Education : Array<any> = []

  constructor() { }

  ngOnInit(): void {

    let edu1 = {
      fecha : "2020 - Ahora",
      institucion : "Universidad Veracruzana",
      especialidad : "Ingeniería de Software",
      ubicacion : "Ixtaczoquitlán, Ver"     
    };

    let edu2 = {
      fecha : "2017 - 2020",
      institucion : "CBTis 192",
      especialidad : "Programación",
      ubicacion : "Ixtaczoquitlán, Ver"     
    };

    let edu3 = {
      fecha : "2014 - 2017",
      institucion : "ESTI 74",
      especialidad : "Informática",
      ubicacion : "Ixtaczoquitlán, Ver"     
    };

    this.Education.push(edu1);
    this.Education.push(edu2);
    this.Education.push(edu3);
  }

}
