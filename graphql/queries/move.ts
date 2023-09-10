import { gql } from "@apollo/client";

export const GET_MOVES = gql`
  query getMoves {
  pokemon_v2_move {
    accuracy
    id
    name
    pokemon_v2_type {
      name
    }
    power
    pp
    priority
    pokemon_v2_movedamageclass {
      name
    }
  }
}
`