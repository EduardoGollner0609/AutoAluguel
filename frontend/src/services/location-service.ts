import axios from "axios";
import { BASE_URL } from "../utils/system";
import { LocationInsertDTO } from "../models/location";

export function findAll(page: number, size = 5, sort = "returnDate") {
  return axios.get(
    BASE_URL + `/locations?page=${page}&size=${size}&sort=${sort}`
  );
}

export function insert(requestBody: LocationInsertDTO | undefined) {
  return axios.post(BASE_URL + "/locations", requestBody);
}
