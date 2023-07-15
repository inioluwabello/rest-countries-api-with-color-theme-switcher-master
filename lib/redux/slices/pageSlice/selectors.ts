/* Instruments */
import type { ReduxState } from '@/lib/redux'
export const selectPageConfig = (state: ReduxState) => state.page.config
export const selectCountries = (state: ReduxState) => state.page.countries
export const selectSearchValue = (state: ReduxState) => state.page.searchValue
export const selectFilterValue = (state: ReduxState) => state.page.region
