import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { AboutComponent } from './pages/about/about.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CapitalizadoPipe } from './pipes/capitalizado.pipe';
import { TemplateComponent } from './pages/template/template.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    AboutComponent,
    NavbarComponent,
    FooterComponent,
    CapitalizadoPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
