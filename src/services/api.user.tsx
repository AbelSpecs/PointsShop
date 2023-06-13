import { User } from "~/types/user";

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDc2NWNhMmUzODFmYzAwMjE5M2U5YmQiLCJpYXQiOjE2ODU0Nzg1NjJ9.0wHJfup1cE28Zl6VT9RFrN-tfRBHHkD49w5tmChKZyU';

const fetchUser = async (): Promise<User> => {
  const apiUrl = 'https://coding-challenge-api.aerolab.co/user/me';
  try {
    let response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      }
    })
    return await response.json();
  } catch (error: any) {
    throw new Error(error);
  }
}

const user = async(): Promise<User> => {
  return await fetchUser();
}

export { user };
