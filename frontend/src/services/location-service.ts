import axios from "axios";
import { BASE_URL } from "../utils/system";

export function findAll(page: number, size = 5, sort = "returnDate") {
  return axios.get(BASE_URL + `/locations?page=${page}&size=${size}&sort=${sort}`);
}
