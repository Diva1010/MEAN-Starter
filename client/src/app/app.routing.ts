import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './auth/auth.guard';


const appRoutes: Routes = [
    { path: '', component : LoginComponent  },
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component : LoginComponent },
    { path: 'register', component: RegisterComponent},
     // otherwise redirect to home
     { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);