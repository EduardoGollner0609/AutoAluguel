import { AutomobileDTO } from "./automobile";
import { ClientDTO, ClientMinDTO } from "./client";

export type LocationDTO = {
  id: number;
  rentalDate: string;
  returnDate: string;
  value: number;
  client: ClientMinDTO;
  automobile: AutomobileDTO;
};

export type LocationInsertDTO = {
  client: ClientDTO | undefined;
  automobile: AutomobileDTO | undefined;
};
