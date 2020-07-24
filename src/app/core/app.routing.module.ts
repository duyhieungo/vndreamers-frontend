import {RouterModule, Routes} from '@angular/router';
import {FormLoginSignupComponent} from '../form-login/form-login-signup.component';
import {NgModule} from '@angular/core';
import {ForgotPasswordComponent} from '../forgot-password/forgot-password.component';
import {PostFormComponent} from '../post-form/post-form.component';

const routes: Routes = [
  {
    path: 'register',
    component: FormLoginSignupComponent
  },
  {
    path: 'login',
    component: FormLoginSignupComponent
  },
  {
    path: '',
    component: FormLoginSignupComponent
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent
  },
  {
    path: 'user',
    component: PostFormComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {

}
