import { AutomobileDTO } from "./automobile";
import { ClientDTO } from "./client";

export type LocationDTO = {
  id: number;
  rentalDate: Date;
  returnDate: Date;
  value: number;
  client: ClientDTO;
  automobile: AutomobileDTO;
};
