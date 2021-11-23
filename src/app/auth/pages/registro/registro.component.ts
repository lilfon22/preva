import { Component, OnInit } from '@angular/core';
import { Auth } from '../../interfaces/auth.interface';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {

  auth: Auth = {
    id: '',
    email: '',
    usuario: '',
    password: '',
  }

  constructor() { }

  ngOnInit(): void {
  }

}
