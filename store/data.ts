import { createStore } from 'zustand/vanilla'

export type GenericState = {
  value: any
}

export type GenericActions = {
  setValue: (value: any) => void
}

export type GenericStore = GenericState & GenericActions

export const defaultInitState: GenericState = {
  value: null
}

export const createGenericStore = (
  initState: GenericState = defaultInitState
) => {
  return createStore<GenericStore>()(set => ({
    ...initState,
    setValue: (value: any) => set(() => ({ value }))
  }))
}
