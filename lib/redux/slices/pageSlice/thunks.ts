/* Instruments */
import { createAppAsyncThunk } from '@/lib/redux/createAppAsyncThunk'
import { searchCountriesByName } from './searchCountriesByName'
import { filterCountriesByRegion } from './filterCountriesByRegion'

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