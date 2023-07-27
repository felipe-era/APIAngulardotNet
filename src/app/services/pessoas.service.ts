import { Injectable } from '@angular/core';
import { Pessoa } from '../models/pessoas';

@Injectable({
  providedIn: 'root'
})
export class PessoasService {

  constructor() { }

  public getPessoas() : Pessoa[]{
    let pessoas = new Pessoa() 
    pessoas.id = 1;
    pessoas.nome = "Mario";
    pessoas.sobrenome = "Kart";
    pessoas.país = "Italia";

    return [pessoas];
  }

}
