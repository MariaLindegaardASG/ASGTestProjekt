import { Component } from '@angular/core';
import { NgClass } from '@angular/common'; // Importér kun NgClass
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [NgClass, RouterModule], // Importér nødvendige moduler her
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  menuOpen: boolean = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
