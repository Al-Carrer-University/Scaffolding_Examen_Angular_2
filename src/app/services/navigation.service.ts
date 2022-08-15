import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { NavigationEnd } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  // Creamos un historial privado
  private history: string[] = []; // Se van a guardar todas las rutas por las que pasemos
  private breadCrumb: string[] = []; // Se va a guardar un historial de paginas reducido, como un breadcrumb o hilo de ariadna
  constructor(private router: Router, private location: Location) {}

  /* Creamos un subscriptor a un evento de navegación */
  public startSaveHistory(): void {
    let url: string | undefined;
    this.router.events.subscribe((event: object) => {
      if (event instanceof NavigationEnd) {
        url = event.urlAfterRedirects;

        this.history.push(url);

        if (url == '/') this.breadCrumb.length = 0;
        if (this.breadCrumb.indexOf(url) == -1) this.breadCrumb.push(url);
        else this.breadCrumb.length = this.breadCrumb.indexOf(url) + 1;
      }
    });
  }

  /* Metodo que nos devuelve el historial */
  public getHistory(): string[] {
    return this.breadCrumb;
  }

  /* Metodo para ir hacia atras. */
  public goBack(): void {
    this.breadCrumb.pop;
    if (this.breadCrumb.length > 0) {
      this.location.back();
    } else {
      this.router.navigateByUrl('/');
    }
  }

  /* Metodo que te devuelve la url anterior. */
  public getPreviousUrl(): string {
    if (this.breadCrumb.length > 0) {
      return this.breadCrumb[this.history.length - 2];
    }

    return '';
  }
}
