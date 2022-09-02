import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {

  workExperience : Array<any> = []

  constructor() { }

  ngOnInit(): void {

    let work1 = {
              fecha : "2017-2022",
              ubicacion : " B.J., Quintana Roo",
              puesto : "CEO",
              empresa : "Computrabajo",
              logros: [
                { descripcion: "Innovación de Software"},
                { descripcion: "Cluster GPU"}
              ]
    };

    let work2 = {
              fecha : "2013-2017",
              ubicacion : "Guadalajara, Jalisco",
              puesto : "Programador",
              empresa : "Ciasa Comercial",
              logros: [
                { descripcion: "Cluster hadoop"},
                { descripcion: "Red Neuronal GNU"}
              ]
    };

    this.workExperience.push(work1);
    this.workExperience.push(work2);


  }

}
