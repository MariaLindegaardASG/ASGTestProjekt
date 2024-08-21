import { Component, OnInit } from '@angular/core';
import { OfferService } from '../services/offer.service';
import { Offer } from '../models/offer.model';
import { HttpClientModule } from '@angular/common/http';
import { NgFor, NgIf, CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [HttpClientModule, NgFor, NgIf, RouterModule, CommonModule],
})
export class HomeComponent implements OnInit {
  offers: Offer[] = [];

  constructor(private offerService: OfferService) {}

  ngOnInit(): void {
    this.offerService.getOffers().subscribe((data) => {
      this.offers = data.results;
      console.log(this.offers);
    });
  }
}
