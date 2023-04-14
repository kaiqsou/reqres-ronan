import { Response } from './../models/Response.model';
import { User } from '../models/User.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  url ="https://reqres.in/api/users?page=2"

  constructor(private http: HttpClient) { }

  create(user : User){
    return this.http.post(this.url, user);
  }

  getAll(){
    return this.http.get(this.url)
  }

  getOne(id: number){
    return this.http.get(`${this.url}/${id}`)
  }

  update(user: User){
    return this.http.put(`${this.url}/${user.id}`, user);
  }

  delete(id: number){
    return this.http.delete(`${this.url}/${id}`)
  }

}
