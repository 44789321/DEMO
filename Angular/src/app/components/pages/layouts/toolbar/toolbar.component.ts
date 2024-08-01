import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  opened= false;
  isAuth = false;

  constructor(private toatr: ToastrService,
    private router: Router) {}

    openModalProfile() {

    }
    
  logout() {
    this.toatr.info('Se ha cerrado la sesión', 'Hasta luego');
  }
}
