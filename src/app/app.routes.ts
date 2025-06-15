import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { QuizComponent } from './pages/quiz/quiz.component';
import { ResultatComponent } from './pages/resultat/resultat.component';

export const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'quiz',component:QuizComponent},
  {path:'results',component:ResultatComponent},
  { path: '**', redirectTo: '' }
];
