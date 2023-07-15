export const filterCountriesByRegion = async (
  region: string
): Promise<{ data: any }> => {
  const response = await fetch(`https://restcountries.com/v3.1/region/${region}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  })
  const result = await response.json();
  return result
}
