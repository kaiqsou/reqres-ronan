import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { UsersService } from '../services/users.service';
import { User } from '../models/User.model';

@Component({
  selector: 'app-criar-usuario',
  templateUrl: './criar-usuario.page.html',
  styleUrls: ['./criar-usuario.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class CriarUsuarioPage implements OnInit {
  first_name = '';
  last_name = '';
  email = '';
  avatar = '';

  constructor(private router: Router, private usersService : UsersService) { }

  ngOnInit() {
  }

  salvar(){
    const usuario: User = {
      first_name: this.first_name,
      last_name: this.last_name,
      email: this.email,
      avatar: this.avatar
    }
    this.usersService.create(usuario).subscribe(dados =>{
      alert('Usuário criado com sucesso: ' + dados.id)
      this.router.navigateByUrl('/home');
    });
  }

  cancelar()
  {
    this.router.navigateByUrl('/home'); 
  }

}
