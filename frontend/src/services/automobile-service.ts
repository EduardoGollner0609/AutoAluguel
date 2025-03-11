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

export function update(id: number, requestBody: AutomobileDTO) {
  return axios.put(BASE_URL + `/automobiles/${id}`, requestBody);
}

export function deleteById(id: number) {
  return axios.delete(BASE_URL + `/automobiles/${id}`);
}
