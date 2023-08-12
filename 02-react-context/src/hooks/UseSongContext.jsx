// Empiesan con la palabra use
// son funciones
// Deben usar otros Hooks de React

import { useContext } from 'react'
import { SongContext } from '../context/SongContext'

// crear un custom hook para para usar el contexto

export const useSongContext = () => {
  const context = useContext(SongContext)

  if (!context) {
    throw new Error('useSongContext debe de usarse dentro de SongProvider')
  }

  return context
}
