const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDc2NWNhMmUzODFmYzAwMjE5M2U5YmQiLCJpYXQiOjE2ODU0Nzg1NjJ9.0wHJfup1cE28Zl6VT9RFrN-tfRBHHkD49w5tmChKZyU';
const product = async (): Promise<any> => {
  try {
    let response = await fetch('https://coding-challenge-api.aerolab.co/products', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      }
    })
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}

export { product };
