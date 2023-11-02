import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css'],
})
export class UncommonPageComponent {
  public name: string = 'camilo';
  public gender: 'male' | 'female' = 'male';

  public invitationMap = {
    male: 'Invitarlo',
    female: 'Invitarla',
  };

  public changeClient(): void {
    this.name = 'wendy';
    this.gender = 'female';
  }

  public clients: string[] = [
    'maria',
    'Pedro',
    'Camilo',
    'Jhon',
    'Angel',
    'Eduardo',
  ];

  public clientsMap = {
    '=0': 'no tenemos ningun cliente',
    '=1': 'tenemos  1 cliente esperando',
    other: 'tenemos # clientes esperando',
  };

  public deleteClient(): void {
    this.clients.shift();
  }

  public person = {
    name: 'camilo s',
    age: 36,
    address: ' calle 45',
  };

  public myObservable = interval(2000)
  
}
