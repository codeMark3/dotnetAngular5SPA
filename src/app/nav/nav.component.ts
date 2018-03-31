import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.css"]
})
export class NavComponent implements OnInit {
  model: any = {};
  photoUrl: string;

  constructor(
    private authService: AuthService,
    private alertifyService: AlertifyService,
    private router: Router
  ) {}

  ngOnInit() {
    this.authService.currentPhotoUrl
      .subscribe(photoUrl => this.photoUrl = photoUrl);
  }

  login() {
    this.authService.login(this.model).subscribe(
      data => {
        this.alertifyService.success("logged in successfully");
      },
      error => {
        this.alertifyService.error('Failed to login');
      }, () => {
        this.router.navigate(["/members"]);
      });
      this.model = {};
  }
  logout() {
    this.authService.userToken = null;
    this.authService.currentUser = null;
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.model = {}; 
    this.alertifyService.message('logged out');
    this.router.navigate(['/home']);
  }
  loggedIn() {
    return this.authService.loggedIn();
  }
}
