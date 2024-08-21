import { Component, OnInit } from '@angular/core';
import { OfferService } from '../services/offer.service';
import { Offer } from '../models/offer.model';
import { HttpClientModule } from '@angular/common/http';
import { NgFor, NgIf, CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home', // Defines the component's HTML tag
  standalone: true, // Indicates that this component is standalone
  templateUrl: './home.component.html', // Path to the component's HTML template
  styleUrls: ['./home.component.scss'], // Path to the component's styles
  imports: [HttpClientModule, NgFor, NgIf, RouterModule, CommonModule], // Modules required by this component
})
export class HomeComponent implements OnInit {
  offers: Offer[] = []; // Array to hold the offers from the API
  apiError: boolean = false; // Flag to indicate if the API call failed

  constructor(private offerService: OfferService) {}

  ngOnInit(): void {
    // Fetch offers from the API on component initialization
    this.offerService.getOffers().subscribe(
      (data) => {
        this.offers = data.results; // Assign API data to the offers array
        console.log(this.offers);
      },
      (error) => {
        console.error('API Error:', error); // Log the error if the API call fails
        this.apiError = true; // Set the error flag to true
        
        // Populate offers with example data if API fails
        this.offers = Array(10).fill(this.exampleOffer);
      }
    );
  }

  exampleOffer: Offer = {
    id: 'example-id', // Example ID for mock offer
    full_title: 'Example Car', // Example title for mock offer
    thumbnail: 'https://via.placeholder.com/150', // Placeholder image for mock offer
    price_monthly: 2995, // Example price for mock offer
    address: {
      city: 'Example City', // Example city for mock offer
    },
  };
}
