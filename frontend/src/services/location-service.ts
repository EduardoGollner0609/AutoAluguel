import axios from "axios";
import { BASE_URL } from "../utils/system";

export function findAll(page: number, size = 12, sort = "returnDate") {
  return axios.get(BASE_URL + `/locations?size=${page}&${size}&&${sort}`);
}
