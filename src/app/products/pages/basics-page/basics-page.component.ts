import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css'],
})
export class BasicsPageComponent {
  public nameLowerCase: string = 'nuevo valor';
  public nameUpperCase: string = 'NUEVO VALOR';
  public nameTitleCase: string = 'CamiLo SolER';
  public customDate: Date = new Date();
}
