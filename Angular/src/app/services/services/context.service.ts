import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContextService {

  public userInfo: any;
  public menu: any[] = [];
  public perfilamiento: any;
  public filtros: any;
  public idSesion: string = '';

  constructor() {
  }

  isAuth() {
    if (Number(localStorage.getItem('id')) > 0)
      return true;
    else
      return false;
  }

  setInformation(data?: any) {
    if (data) {
      localStorage.setItem('id', data.id);
      localStorage.setItem('first_name', data.first_name);
      localStorage.setItem('last_name', data.last_name);
      localStorage.setItem('email', data.email);
      localStorage.setItem('roles', JSON.parse(data.role));
    }
  }

  SesionId() {
    if (this.idSesion)
      return this.idSesion;
    let valIdSesion = localStorage.getItem('sesion');
    if (valIdSesion || valIdSesion != null)
      this.idSesion = valIdSesion;
    else {
      // this.idSesion = uuid.v4();
      localStorage.setItem('sesion', this.idSesion);
    }
    return this.idSesion;
  }

  logout() {
    this.userInfo = undefined;
    this.perfilamiento = undefined;
    this.menu = [];
    this.idSesion = '';
    this.filtros = undefined;
  }
}
