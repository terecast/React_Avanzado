import { createContext, useState, useEffect } from 'react'
import canciones from '@/assets/listaCanciones.json'
// paso 1. Crear contexto

const SongContext = createContext()

// paso 2. crear el proveedor del contexto
// el proveedor maneja de donde se obtiene la informacion y como se comaprte
// el proveedor es un COMPONENTE que envuelve a los componentes

function SongProvider ({ children }) {
  const [list, setList] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedSong, setSelectedSong] = useState({})

  useEffect(() => {
    setTimeout(() => {
      setList(canciones)
      setLoading(false)
    }, 2000)
  }, [])

  // Crear objeto con la informacion que va a tener el contexto
  const data = {
    list,
    loading,
    selectedSong,
    setSelectedSong

  }
  return (
    <SongContext.Provider value={data}>
      {children}
    </SongContext.Provider>
  )
}

export {
  SongContext,
  SongProvider
}

// USO DE CONTEXT

// Ahora debo ir a un componente de orden supoerior, ejemplo Home jsx o App.jsx
// y envolverlo con la etiqueta home provider
