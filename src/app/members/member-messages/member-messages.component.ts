import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../../_models/message';
import { UserService } from '../../_services/user.service';
import { AuthService } from '../../_services/auth.service';
import { AlertifyService } from '../../_services/alertify.service';
import 'rxjs/add/operator/do';
import * as _ from 'underscore';

@Component({
  selector: "app-member-messages",
  templateUrl: "./member-messages.component.html",
  styleUrls: ["./member-messages.component.css"]
})
export class MemberMessagesComponent implements OnInit {
  @Input() userId: number;
  messages: Message[];
  newMessage: any = {};

  constructor(
    private userService: UserService,
    private authservice: AuthService,
    private alertity: AlertifyService
  ) {}

  ngOnInit() {
    this.loadMessages();
  }

  loadMessages() {
    const currentUserId = +this.authservice.decodedToken.nameid;
    this.userService
      .getMessageThread(this.authservice.decodedToken.nameid, this.userId)
      .do(messages => {
        _.each(messages, (message: Message) => {
          // console.log(messages);
          if(message.isRead === false && message.recipientId === currentUserId) {
            this.userService.markAsRead(currentUserId, message.id);
          }
        });
      })
      .subscribe(
        messages => {
          this.messages = messages;
        },
        error => {
          this.alertity.error(error);
        }
      );
  }

  sendMessage() {
    this.newMessage.recipientId = this.userId;
    this.userService
      .sendMessage(this.authservice.decodedToken.nameid, this.newMessage)
      .subscribe(
        message => {
          this.messages.unshift(message);
          console.log(this.messages);
          this.newMessage.content = "";
          // this.loadMessages();
        },
        error => {
          this.alertity.error(error);
        }
      );
  }
}
