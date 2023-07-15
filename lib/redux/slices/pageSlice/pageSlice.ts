/* Core */
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { filterByRegion, searchByName } from './thunks'

const initialState: PageSliceState = {
  config: {
    theme: ((localStorage.getItem('theme')) as 'Light' | 'Dark') ?? 'Light'
  },
  searchValue: 'anta',
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
      localStorage.setItem('theme', action.payload);
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
      console.log(state.selectedCountry);
    }
  },
  extraReducers: (builder) => {
    builder
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
        console.log(action)
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
  name: object,
  population: number,
  region: string,
  subRegion: string,
  capital: string[],
  topLevelDomain: string,
  currencies: object,
  languages: object
}

export interface IPage {
  theme: 'Light' | 'Dark'
}