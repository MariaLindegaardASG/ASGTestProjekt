// src/app/models/offer.model.ts

export interface Offer {
    id: string;
    full_title: string;
    thumbnail: string;
    price_monthly: number;
    address: {
      city: string;
    };
    // tilføj eventuelle andre relevante felter her
  }
  