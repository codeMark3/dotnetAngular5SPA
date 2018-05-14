import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../_models/User';
import { UserService } from '../../_services/user.service';
import { AuthService } from '../../_services/auth.service';
import { AlertifyService } from '../../_services/alertify.service';

@Component({
  selector: 'app-member-card',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.css']
})
export class MemberCardComponent implements OnInit {
  @Input() user: User;
  
  constructor(
    private authService: AuthService,
    private userService: UserService,
    private alertyfy: AlertifyService
  ) { }

  ngOnInit() {
  }

  sendLike(id: number) {
    this.userService.seedLike(this.authService.decodedToken.nameid, id)
      .subscribe(data => {
        this.alertyfy.success("You have like: " + this.user.knownAs);
      }, error => {
        this.alertyfy.error(error);
      });
  }

}
