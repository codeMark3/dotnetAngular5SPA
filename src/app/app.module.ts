import { AuthModule } from './auth/auth.module';
import { UserService } from './_services/user.service';
import { AuthGuard } from './_guards/auth.guard';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDropdownModule, TabsModule, BsDatepickerModule, CollapseModule, PaginationModule, ButtonsModule } from "ngx-bootstrap";
import { RouterModule } from '@angular/router';
import { NgxGalleryModule } from "ngx-gallery";
import { appRoutes } from './routes';


import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AuthService } from './_services/auth.service';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { AlertifyService } from './_services/alertify.service';
import { MemberListComponent } from './members/member-list/member-list.component';
import { ListsComponent } from './lists/lists.component';
import { MessagesComponent } from './messages/messages.component';
import { MemberCardComponent } from './members/member-card/member-card.component';
import { AuthComponent } from './auth/auth.component';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { MemberDetailResolver } from './_resolvers/member-detail.resolver';
import { MemberListResolver } from './_resolvers/member-list.resolver';
import { MemberEditComponent } from './members/member-edit/member-edit.component';
import { MemberEditResolver } from './_resolvers/member-edit.resolver';
import { PreventUnsavedChanges } from './_guards/prevent-unsaved-changes.guard';
import { PhotoEditComponent } from './members/photo-edit/photo-edit.component';
import { FileUploadModule } from 'ng2-file-upload';
import { TimeAgoPipe } from 'time-ago-pipe';
import { ListsResolver } from './_resolvers/lists.resolver';
import { MessagesResolver } from './_resolvers/message.resolver';
import { MemberMessagesComponent } from './members/member-messages/member-messages.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    RegisterComponent,
    MemberListComponent,
    ListsComponent,
    MessagesComponent,
    MemberCardComponent,
    AuthComponent,
    MemberDetailComponent,
    MemberEditComponent,
    PhotoEditComponent,
    TimeAgoPipe,
    MemberMessagesComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    AuthModule,
    NgxGalleryModule,
    FileUploadModule,
    ReactiveFormsModule,
    CollapseModule,
    BsDatepickerModule.forRoot(),
    PaginationModule.forRoot(),
    ButtonsModule.forRoot()
  ],
  providers: [
    AuthService,
    AlertifyService,
    UserService,
    AuthGuard,
    PreventUnsavedChanges,
    MemberDetailResolver,
    MemberListResolver,
    MemberEditResolver,
    ListsResolver,
    MessagesResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
