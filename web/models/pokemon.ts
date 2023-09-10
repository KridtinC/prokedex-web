import { Move } from "./move"
import { Stats } from "./stat"
import { PokemonType } from "./type"

export interface Pokemon {
    id: number
    name: string
    url: string
    imageURL: string
}

export interface PokemonInfo {
    id: number
    name: string
    imageURL: string
    stats: Stats
    totalStats: number
    type1: PokemonType
    type2?: PokemonType
    moves: Move[]
}
