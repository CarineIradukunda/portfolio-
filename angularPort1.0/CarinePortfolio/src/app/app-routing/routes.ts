import { Routes } from '@angular/router';


import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { ProjectsComponent } from '../projects/projects.component';


export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'projects', component: ProjectsComponent },
    {path: 'contact',component: ContactComponent},
    {path: 'about' , component: AboutComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];