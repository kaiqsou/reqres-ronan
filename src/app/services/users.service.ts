import { Response } from './../models/Response.model';
import { User } from '../models/User.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, EMPTY, map, Observable } from 'rxjs';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  url = 'https://reqres.in/api/users';

  constructor(private http: HttpClient, private alertCtrl: AlertController) {}

  create(user: User): Observable<User> {
    return this.http.post<User>(this.url, user).pipe(
      map((retorno) => retorno),
      catchError((erro) => this.exibirErro(erro))
    );
  }

  getAll(): Observable<User[]> {
    return this.http.get<Response>(this.url).pipe(
      map((retorno) => retorno.data),
      catchError((erro) => this.exibirErro(erro))
    );
  }

  getOne(id: number): Observable<User> {
    return this.http.get<User>(`${this.url}/${id}`).pipe(
      map((retorno) => retorno),
      catchError((erro) => this.exibirErro(erro))
    );
  }

  update(user: User): Observable<User> {
    return this.http.put<User>(`${this.url}/${user.id}`, user).pipe(
      map((retorno) => retorno),
      catchError((erro) => this.exibirErro(erro))
    );
  }

  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }

  exibirErro(erro: any): Observable<any> {
    const titulo = `Erro de conexão!`;
    const msg = `Verifique sua Conexão ou informe esse erro ao suporte: ${erro.status}`;
    this.presentAlert(titulo, msg);
    console.log(erro);
    return EMPTY;
  }
  async presentAlert(titulo: string, msg: string) {
    const alert = await this.alertCtrl.create({
      header: titulo,
      message: msg,
      buttons: ['OK'],
    });

    await alert.present();
  }
}
