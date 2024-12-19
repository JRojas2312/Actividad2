import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { AboutComponent } from './pages/about/about.component';
import { TemplateComponent } from './pages/template/template.component';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'about', component: AboutComponent },
  { path: 'template', component: TemplateComponent },
  { path: '**', redirectTo: 'inicio' } // Ruta comodín (opcional)
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

