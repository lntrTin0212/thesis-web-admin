import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { MeComponent } from './content/user/me/me.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { TopicDetailComponent } from './content/topic/topic-detail/topic-detail.component';
import { TopicListComponent } from './content/topic/topic-list/topic-list.component';
import { TopicComponent } from './content/topic/topic.component';
import { UserComponent } from './content/user/user.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path: "admin", component: AuthComponent, children: [
    {path:"sign-in", component: SignInComponent},
    {path:"sign-up", component: SignUpComponent}
  ]},
  {path: "user", component:UserComponent},
  {path: 'me', component: MeComponent},
  {path: "topic", component:TopicComponent},
  {path: "topic/:topic", component:TopicDetailComponent},
  {path: "**", component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
