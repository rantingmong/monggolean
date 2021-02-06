import {writable} from "svelte/store"

export type PageLink = {
  label : string,
  link  : () => void
}

export const pageTab    = writable(0)
export const pageLinks  = writable<PageLink[]>([])
