import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/* Importación de traducciones */
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Modulos personalizados
import { AngularMaterialModule } from './modules/angular-material/angular-material.module';
import { TraduccionesModule } from './modules/traducciones/traducciones.module';
import { LazyLoadingDirective } from './directives/lazy-loading.directive';
import { VillagerListComponent } from './components/list/list.component';
import { BugListComponent } from './components/list-2/list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LazyLoadingDirective,
    VillagerListComponent,
    BugListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // Angular Material
    AngularMaterialModule,
    BrowserAnimationsModule,
    TraduccionesModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
