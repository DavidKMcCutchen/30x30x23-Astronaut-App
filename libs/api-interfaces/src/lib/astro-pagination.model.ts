import { Person } from "./api-interfaces";

export interface AstroPagination {
  people: Person[];
  number: number;
  message: string;
}