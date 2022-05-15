import { Person } from "./api-interfaces";


// THIS is the original "Shape" in which our API
// communicates.
// However we don't necessarily want to display ALL 
// of this data...

export interface AstroPagination {
  people: Person[];
  number: number;
  message: string;
}