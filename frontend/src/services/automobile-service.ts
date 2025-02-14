import axios from "axios";
import { BASE_URL } from "../utils/system";
import { AutomobileDTO } from "../models/automobile";

export function findAllOrderByReturned() {
  return axios.get(BASE_URL + "/automobiles");
}

export function findById(id: number) {
  return axios.get(BASE_URL + `/automobiles/${id}`);
}

export function insert(requestBody: AutomobileDTO) {
  return axios.post(BASE_URL + "/automobiles", requestBody);
}
