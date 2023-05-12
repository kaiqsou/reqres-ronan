import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../services/users.service';
import { User } from '../models/User.model';

@Component({
  selector: 'app-alterar-usuario',
  templateUrl: './alterar-usuario.page.html',
  styleUrls: ['./alterar-usuario.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class AlterarUsuarioPage implements OnInit {
  id = 0;
  email = '';
  first_name = '';
  last_name = '';
  avatar = '';

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private usersService : UsersService) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];

    this.usersService.getOne(this.id).subscribe(retorno => {
    this.email = retorno.email!
    this.first_name = retorno.first_name!
    this.last_name = retorno.last_name!
    this.avatar = retorno.avatar!
  })

}

  salvar()
  {
    const usuario: User = {
      id: this.id,
      email: this.email,
      first_name: this.first_name,
      last_name: this.last_name,
      avatar: this.avatar
    }
    this.usersService.update(usuario).subscribe(dados =>{
      alert('Usuário atualizado com sucesso: ' + dados.id)
      this.router.navigateByUrl('/home');
    });
  }

  cancelar()
  {
    this.router.navigateByUrl('/home')
  }

}
