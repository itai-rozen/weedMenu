import { useState, useEffect } from 'react'
import Nav from './Nav.jsx'
import './App.css'
import ItemList from './ItemList.jsx'

function App() {
  const [query, setQuery] = useState(null)
  const [data,setData] = useState([])
  const [items, setItems] = useState([])

  useEffect(() => {
    if (!data.length) 
        getData()
  }, [])

  const getData = async () => {
      const response = await fetch(`https://docs.google.com/spreadsheets/d/e/2PACX-1vST2NkDnxoRNnr25HpUpqU9CgdpxtIncPB-csoPDR5l3wnzK-_WnDk-xpo4LbdmsOfr62CPWZyvlqJp/pub?output=csv`)
      const result = await response.text()
      const json = Papa.parse(result, { header: true })
      console.log(json.data)
      setData(json.data)
  }

  const searchQuery = (query) => {
    const filteredData = data.filter(item => item.brandName.toLowerCase().includes(query.toLowerCase()))
    console.log('items: ', filteredData)
    setItems(filteredData)
  }

  return (
    <>
      <Nav />
      <label htmlFor="search" title='Search' >Search</label>
      <input onChange={e => setQuery(e.target.value)} id="search" type="search" />
      <button onClick={() => {searchQuery(query)}}>Search</button>

      {
        items.length && <ItemList items={items} />
      }
    </>
  )
}

export default App
