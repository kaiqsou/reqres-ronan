import { UsersService } from './../services/users.service';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class HomePage {
  constructor(private usersService: UsersService) {
    this.buscarUsuarios();
  }
  buscarUsuarios() {
    this.usersService.getAll().subscribe((dados) => {
      console.log(dados);
    });
  }
}
