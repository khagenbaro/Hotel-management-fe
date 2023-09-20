import { Address } from "./Address";
import { Room } from "./Room";

// hotel.model.ts
export class Hotel {
        hotelName: string = '';
        city : string = '';
        state : string = '';
        address: Address = new Address;
        rooms : Room[] = [];      
  }
  