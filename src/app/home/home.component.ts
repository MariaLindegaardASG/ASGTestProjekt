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
  apiError: boolean = false;

  constructor(private offerService: OfferService) {}

  ngOnInit(): void {
    this.offerService.getOffers().subscribe(
      (data) => {
        this.offers = data.results;
        console.log(this.offers);
      },
      (error) => {
        console.error('API Error:', error);
        this.apiError = true;
        
        // Generer en liste med 10 eksempler på tilbud
        this.offers = Array(10).fill(this.exampleOffer);
      }
    );
  }

  exampleOffer: Offer = {
    id: 'example-id',
    full_title: 'Example Car',
    thumbnail: 'https://via.placeholder.com/150',
    price_monthly: 2995,
    address: {
      city: 'Example City',
    },
  };
}
