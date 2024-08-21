import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from './footer/footer.component';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'] // Rettet fra styleUrl til styleUrls
})
export class AppComponent implements OnInit {
  title = 'car-lease-portal2';

  ngOnInit(): void {
    initFlowbite();
  }
}
