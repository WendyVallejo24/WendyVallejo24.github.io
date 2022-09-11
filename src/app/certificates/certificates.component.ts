import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.css']
})
export class CertificatesComponent implements OnInit {

  certificates : Array<any> = []

  constructor() { }

  ngOnInit(): void {

    let cert1 = {
      certificacion : "Project Management Professional",
      anio : "2018"
    };

    let cert2 = {
      certificacion : "Ingeniero de Software Certificado",
      anio : "2020"

    };

    let cert3 = {
      certificacion : "Certificación de Microsoft",
      anio : "2022"
    };

    this.certificates.push(cert1);
    this.certificates.push(cert2);
    this.certificates.push(cert3);
  }

}
