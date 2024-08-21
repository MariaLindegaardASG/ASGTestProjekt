import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [NgClass, RouterModule], // Importing necessary modules for using Angular directives and router functionalities
  templateUrl: './navigation.component.html', // Template file containing the HTML structure
  styleUrls: ['./navigation.component.scss'] // Styles specific to this component
})
export class NavigationComponent {
  // Boolean flag to control the visibility of the mobile menu
  menuOpen = false;

  // Method to toggle the menu visibility when the toggle button is clicked
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
