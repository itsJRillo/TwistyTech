import { API_URL } from "./config";

export async function getData(prompt) {
    const urlData = `${API_URL}/${prompt}`;
    const resData = await fetch(urlData);
  
    if (!resData.ok) {
      throw new Error('Failed to fetch data')
    }
   
    return resData.json()
  }
  