import axios from "axios";
import { ClientDTO } from "../models/client";
import { BASE_URL } from "../utils/system";

export function insert(requestBody: ClientDTO) {
  return axios.post(BASE_URL + "/clients", requestBody);
}

export function findByCpf(cpf: string) {
  return axios.get(BASE_URL + `/clients/${cpf}`);
}
