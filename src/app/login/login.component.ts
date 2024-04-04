import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from './login-service.service';
import { User } from '../shared/models/user';
import { FormsModule } from '@angular/forms';
import { LoginUser } from '../shared/models/loginUser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

  demoData: User[] = []

  loginUser: LoginUser = new LoginUser();

  constructor( private loginService : LoginServiceService, private router: Router) {}
  ngOnInit(): void {
    this.loginService.getAllUsers().subscribe(
      data => {
        console.log('data', data);
        this.demoData = data;
        let user = {
          userName : this.demoData[0].userName,
          password : this.demoData[0].password,
          email : this.demoData[0].email
        }
        // this.loginService.loginUser(user).subscribe(
        //   data => {
        //     console.log('logged in user', data)
        //   }
        // )
      }
    )
  }

  onSubmit() {
    this.loginService.loginUser(this.loginUser).subscribe(
          data => {
            console.log('logged in user', data)
            this.router.navigate(['welcome']);
          }
        )
  }
}
