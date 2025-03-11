import axios from "axios";
import { BASE_URL } from "../utils/system";
import { LocationDTO, LocationInsertDTO } from "../models/location";

export function findAll(page: number, size = 6, sort = "returnDate") {
  return axios.get(
    BASE_URL + `/locations?page=${page}&size=${size}&sort=${sort}`
  );
}

export function insert(requestBody: LocationInsertDTO | undefined) {
  return axios.post(BASE_URL + "/locations", requestBody);
}

export function update(requestBody: LocationDTO) {
  return axios.put(BASE_URL + `/locations/${requestBody.id}`, requestBody);
}
