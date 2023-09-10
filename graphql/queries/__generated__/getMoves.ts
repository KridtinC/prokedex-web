/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getMoves
// ====================================================

export interface getMoves_pokemon_v2_move_pokemon_v2_type {
  __typename: "pokemon_v2_type";
  name: string;
}

export interface getMoves_pokemon_v2_move_pokemon_v2_movedamageclass {
  __typename: "pokemon_v2_movedamageclass";
  name: string;
}

export interface getMoves_pokemon_v2_move {
  __typename: "pokemon_v2_move";
  accuracy: number | null;
  id: number;
  name: string;
  /**
   * An object relationship
   */
  pokemon_v2_type: getMoves_pokemon_v2_move_pokemon_v2_type | null;
  power: number | null;
  pp: number | null;
  priority: number | null;
  /**
   * An object relationship
   */
  pokemon_v2_movedamageclass: getMoves_pokemon_v2_move_pokemon_v2_movedamageclass | null;
}

export interface getMoves {
  /**
   * fetch data from the table: "pokemon_v2_move"
   */
  pokemon_v2_move: getMoves_pokemon_v2_move[];
}
