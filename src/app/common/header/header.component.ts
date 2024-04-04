import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from '../../login/login-service.service';
import { User } from '../../shared/models/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{
  constructor(private router:Router, private loginService: LoginServiceService) {}

  loginUser: User = new User();
  ngOnInit(): void {
    this.loginService.userObservable$.subscribe(
      data => {
        this.loginUser = data;
      }
    )
  }
  navigateTo(url: string) {
    this.router.navigate([url]);
  }

  logOutUser() {
    this.loginService.logout();
  }
}
