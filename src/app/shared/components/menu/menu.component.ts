import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent implements OnInit {
  public menuItems: MenuItem[] = [];
  ngOnInit(): void {
    this.menuItems = [
      {
        label: 'Pipes de angular',
        icon: 'pi pi-desktop',
        items: [
          { label: 'Textos y fechas', icon: 'pi pi-align-left',routerLink:'basics' },
          { label: 'Numeros', icon: 'pi pi-dollar',routerLink:'numbers' },
          { label: 'No comunes', icon: 'pi pi-globe' ,routerLink:'uncommon'},
        ],
      },
      {
        label: 'Personalizados',
        icon: 'pi pi-cog',
        items: [{ label: 'Textos y fechas', icon: 'pi pi-align-left' }],
      },
    ];
  }
}
