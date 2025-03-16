import React from 'react'
import Card from './Card'

export default function ContenidoRight() {
  return (
    <aside className='contenido-right'>
        <Card className = "card" />
        <Card  className= "card"/>
        <div className = "card-container">
            <Card className = "card2"/>
            <Card className = "card2"/>
        </div>
    </aside>
  )
}
