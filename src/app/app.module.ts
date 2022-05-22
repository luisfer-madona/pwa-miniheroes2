import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HeroesComponent } from './heroes/heroes.component';
import { SearchComponent } from './search/search.component';
import { UnheroeComponent } from './unheroe/unheroe.component';
import { VideosComponent } from './videos/videos.component';
import {YouTubePlayerModule} from '@angular/youtube-player';
import { CargaScriptsService } from './carga-scripts.service';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { NgChartsModule } from 'ng2-charts';

import * as $ from 'jquery';
import { GraficaComponent } from './grafica/grafica.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    SearchComponent,
    UnheroeComponent,
    VideosComponent,
    UsuariosComponent,
    GraficaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    YouTubePlayerModule, 
    NgChartsModule
  ],
  providers: [CargaScriptsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
