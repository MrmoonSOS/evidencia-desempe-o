import React from 'react'
import ContenidoLeft from './ContentLeft'
import ContenidoRight from './ContentRight'

export default function Contenido() {
  return (
    <main className='contenido'>
      <ContenidoLeft />
      <ContenidoRight />
    </main>
  )
}
