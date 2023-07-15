export const filterCountriesByRegion = async (region: string): Promise<{ data: any }> => {
  const response = await fetch(`https://restcountries.com/v3.1/region/${region}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  })
  const result = await response.json();
  return result
}

export const searchCountriesByName = async (name: string): Promise<{ data: any }> => {
  const response = await fetch(`https://restcountries.com/v3.1/name/${name}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  })
  const result = await response.json();
  return result
}

export const getCountryList = async (): Promise<{ data: any }> => {
  const response = await fetch(`https://restcountries.com/v3.1/all`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  })
  const result = await response.json();
  return result
}