import { AutomobileDTO } from "./automobile";
import { ClientMinDTO } from "./client";

export type LocationDTO = {
  id: number;
  rentalDate: string;
  returnDate: string;
  value: number;
  client: ClientMinDTO;
  automobile: AutomobileDTO;
};
