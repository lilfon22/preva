import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [`
    .container {
      margin: 10px;
    }
  `]
})
export class MenuComponent implements OnInit {

  constructor( private router: Router,
    private authService: AuthService ) { }

  ngOnInit(): void {
  }

  logout() {
    this.router.navigate(['./auth']);
  }

}
