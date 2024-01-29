export type IRestaurant = {
  source: string;
  availableSittings?: string;
  about_description: string;
  address_1: string;
  country: string;
  cover_image_url: string;
  cuisine_type: string;
  locality: string;
  need_to_know_description: string;
  neighborhood: string;
  postal_code: string;
  premium?: boolean;
  price: number;
  region: string;
  restaurant_website: string;
  restuarant_phone_number: string;
  seating_types: string[];
  venue_id: number;
  venue_name: string;
};
