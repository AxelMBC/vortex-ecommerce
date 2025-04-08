// lib/hooks.ts
import { useDispatch, useSelector, useStore } from 'react-redux'
import type { RootState, AppDispatch, AppStore } from './store'

// Se pueden usar en la app en lugar de los hooks por defecto
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector = <TSelected>(selector: (state: RootState) => TSelected): TSelected =>
  useSelector(selector)
export const useAppStore = () => useStore<AppStore>()