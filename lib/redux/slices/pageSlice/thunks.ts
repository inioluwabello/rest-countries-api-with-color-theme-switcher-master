/* Instruments */
import { createAppAsyncThunk } from '@/lib/redux/createAppAsyncThunk'
import { filterCountriesByRegion, searchCountriesByName, getCountryList } from './apiFunctions'

export const getAllCountries = createAppAsyncThunk(
  'page/getAllCountries',
  async () => {
    const response = await getCountryList()
    return response
  }
)

export const searchByName = createAppAsyncThunk(
  'page/searchByName',
  async (name: string) => {
    const response = await searchCountriesByName(name)
    return response
  }
)

export const filterByRegion = createAppAsyncThunk(
  'page/filterByRegion',
  async (region: string) => {
    const response = await filterCountriesByRegion(region)
    return response;
  },
)