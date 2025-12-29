import { useState, useEffect } from 'react'
import './itemlist.css'
function ItemList({ items }) {
  return (
    <ul>
      {items.map(item => (
        <>
            <li key={item.id}>{item.brandName}</li>
            <li>{item.parent1}</li>
            <li>{item.parent2}</li>
        </>
      ))}
    </ul>
  )
}

export default ItemList
