import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EducationComponent } from './components/education/education.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { PgaeNotFoundComponent } from './components/pgae-not-found/pgae-not-found.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HomeComponent } from './components/home/home.component'
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

const routes: Routes = [
  { path: '', component: HomeComponent},
  {
    path: 'profile',
    component: ProfileComponent,
    children: [
      { path: '', component: EducationComponent },
      { path: 'projects', component: ProjectsComponent },
      { path: 'experience', component: ExperienceComponent }
    ]
  },
  { path: '**', component: PgaeNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), NgbModule.forRoot()],
  exports: [RouterModule]
})
export class AppRoutingModule { }
