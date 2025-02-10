import axios from "axios";
import { BASE_URL } from "../utils/system";

export function findAllOrderByReturned() {
  return axios.get(BASE_URL + "/automobiles");
}

export function findById(id: number) {
  return axios.get(BASE_URL + `/automobiles/${id}`);
}
