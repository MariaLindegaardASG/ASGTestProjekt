// src/app/models/offer.model.ts

// The Offer interface defines the structure of an offer object
export interface Offer {
    id: string;  // Unique identifier for the offer
    full_title: string;  // Full title of the car or offer
    thumbnail: string;  // URL to the thumbnail image of the car
    price_monthly: number;  // Monthly leasing price for the car
    address: {
      city: string;  // City where the offer is located
    };
    // Add any other relevant fields here as needed
  }
  