export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": "f75756d68amsh3a59e6682eefb94p185439jsn2751f77d1b72",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars",
    {
      headers: headers,
    }
  );

  const result = await response.json();

  return result;
}
