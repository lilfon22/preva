import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from '../../interfaces/auth.interface';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent {

   auth: Auth = {
    id: '',
    email: '',
    usuario: '',
    password: '',
}

  constructor( private router: Router,
               private authService: AuthService ) { }

  login() {

    // Ir al backend
    // un usuario
    this.authService.login()
      .subscribe( resp => {
        console.log(resp);

        if ( resp.id ) {
          this.router.navigate(['./animes']);
        }
      })
  }

  ingresarSinLogin() {
    this.authService.logout();
    this.router.navigate(['./animes']);
  }

}
