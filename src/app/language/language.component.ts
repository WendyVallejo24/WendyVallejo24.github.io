import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})
export class LanguageComponent implements OnInit {

  language : Array<any> = []
  constructor() { }

  ngOnInit(): void {

    let idioma1 = {
      idioma : "Español"
    };

    let idioma2 = {
      idioma : "Inglés"
    };

    this.language.push(idioma1);
    this.language.push(idioma2);

  }

}
