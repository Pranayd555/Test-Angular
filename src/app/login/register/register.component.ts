import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/models/user';
import { LoginServiceService } from '../login-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit {

  registerUser: User = new User();

  constructor( private loginService: LoginServiceService, private router:Router) {}

  ngOnInit() {
    this.registerUser.isAdmin = "no";
  }
  onSubmit() {
    this.loginService.register(this.registerUser).subscribe(
      data => {
        this.router.navigate(['welcome']);
        console.log('user registered', data)
      },
    )
  }
}
