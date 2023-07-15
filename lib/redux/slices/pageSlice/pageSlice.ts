/* Core */
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { filterByRegion, searchByName } from './thunks'

const initialState: PageSliceState = {
  config: {
    theme: 'Light'
  },
  searchValue: 'anta',
  region: '',
  countries: [],
  status: 'idle',
}

export const pageSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    setPageTheme: (state, action: PayloadAction<string>) => {
      state.config.theme = action.payload as 'Light' | 'Dark'
    },
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload
    },
    setRegion: (state, action: PayloadAction<string>) => {
      state.region = action.payload
    },
    setCountry: (state, action) => {
      state.countries = action.payload
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
  region: string,
  status: 'idle' | 'loading' | 'failed'
}

export interface IPage {
  theme: 'Light' | 'Dark'
}