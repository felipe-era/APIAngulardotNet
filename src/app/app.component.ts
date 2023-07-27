import { Component } from '@angular/core';
import { Pessoa } from './models/pessoas';
import { PessoasService } from './services/pessoas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'APIAngular';
  pessoas : Pessoa[] = [];

  constructor(private pessoaService : PessoasService) {}

   ngOnInit() : void{
    this.pessoas = this.pessoaService.getPessoas();
    console.log(this.pessoas);
   }
}
