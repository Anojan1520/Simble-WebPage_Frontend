import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';
import { HomeMainComponent } from '../home-main/home-main.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent,LoginComponent,SignupComponent,HomeMainComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
