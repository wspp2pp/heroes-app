// Asi va a ser el state que se recibe
// const state = {
//     name: 'Franco',
//     logged: true,
// }

import { types } from "../types/types";

export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case types.login:
      return {
        // Retorna todas las propiedades del payload de action
        ...action.payload,
        // Se logeó
        logged: true,
      };
    case types.logout:
      return {
        // Se deslogeó
        logged: false,
      };
    // Si el tipo de action es otro...
    default:
      return state;
  }
};
