/* Core */
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { filterByRegion, getAllCountries, searchByName } from './thunks'

const initialState: PageSliceState = {
  config: {
    theme: ((window.localStorage.getItem('theme')) as 'Light' | 'Dark') ?? 'Light'
  },
  searchValue: '',
  region: '',
  countries: [],
  selectedCountry: null,
  status: 'idle',
}

export const pageSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    setPageTheme: (state, action: PayloadAction<string>) => {
      state.config.theme = action.payload as 'Light' | 'Dark'
      window.localStorage.setItem('theme', action.payload);
    },
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload
    },
    setRegion: (state, action: PayloadAction<string>) => {
      state.region = action.payload
    },
    setCountry: (state, action) => {
      state.countries = action.payload
    },
    selectCountry: (state, action: PayloadAction<ICountry>) => {
      state.selectedCountry = action.payload;
    },
    unselectCountry: (state) => {
      state.selectedCountry = null
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllCountries.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(getAllCountries.fulfilled, (state, action: PayloadAction<any>) => {
        state.status = 'idle'
        state.countries = action.payload
      })
      .addCase(searchByName.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(searchByName.fulfilled, (state, action: PayloadAction<any>) => {
        state.status = 'idle'
        state.countries = action.payload
      })
      .addCase(filterByRegion.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(filterByRegion.fulfilled, (state, action: PayloadAction<any>) => {
        state.status = 'idle'
        state.countries = action.payload
      })
  },
})

/* Types */
export interface PageSliceState {
  config: IPage,
  countries: any,
  searchValue: string,
  selectedCountry: ICountry | null,
  region: string,
  status: 'idle' | 'loading' | 'failed'
}

export interface ICountry {
  subregion: string
  tld: any
  continents: any
  name: any,
  population: number,
  region: string,
  subRegion: string,
  capital: string[],
  topLevelDomain: string,
  currencies: any,
  languages: any,
  flags: any
}

export interface IPage {
  theme: 'Light' | 'Dark'
}