import axios from "axios";
import { IResponse, IResultData } from "../interfaces";

const baseURL = "https://api.themoviedb.org/4/";
const token =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNDQwMTA0NmMxYmJkNDM3NzFlODQ0YmU4YzQxNGFjYiIsInN1YiI6IjVmOTgzODJmZTE4Yjk3MDAzNGQwMzM1OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UXcm8LSGmfBILHmAZwdHac3aMU2_7Avb2t_D94CZxQQ";
const headers = {
  Authorization: `Bearer ${token}`,
  "Content-Type": "application/json;charset=utf-8"
};
const instance = axios.create({ baseURL, headers });

export const getMovies = async (): Promise<IResultData> => {
  try {
    const response: IResponse = await instance.get("list/1");
    const result: IResultData = {
      page: response.data.page,
      movies: response.data.results,
      total: response.data.total_pages
    };
    return result;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getNextMovies = async (current: number): Promise<IResultData> => {
  try {
    const next = current + 1;
    const response: IResponse = await instance.get(`list/1?page=${next}`);
    const result: IResultData = {
      page: response.data.page,
      movies: response.data.results,
      total: response.data.total_pages
    };
    return result;
  } catch (error) {
    return Promise.reject(error);
  }
};
