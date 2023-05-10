import { User } from './../models/User.model';
import { UsersService } from './../services/users.service';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Router, RouterLink  } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterLink, FormsModule],
})
export class HomePage {
   listaUsuarios : User[] = [];
  constructor(private usersService: UsersService, private router: Router) {
    
  }

  ionViewWillEnter() {
    this.buscarUsuarios();
  }

  buscarUsuarios(){
    this.usersService.getAll().subscribe(dados => {
      this.listaUsuarios = dados as User[];
    });
  }
}
