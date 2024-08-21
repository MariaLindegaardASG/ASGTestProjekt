import { Component } from '@angular/core';
import { NavigationComponent } from '../navigation/navigation.component';

@Component({
  selector: 'app-header', // The custom HTML tag used to include this component
  standalone: true, // Indicates that this component is a standalone component
  imports: [NavigationComponent], // Imports the NavigationComponent to be used within this component
  templateUrl: './header.component.html', // Specifies the HTML template for this component
  styleUrls: ['./header.component.scss'] // Specifies the SCSS file(s) for styling this component
})
export class HeaderComponent {
  // The HeaderComponent class is empty because it only serves to encapsulate
  // the navigation component within a header structure.
}
