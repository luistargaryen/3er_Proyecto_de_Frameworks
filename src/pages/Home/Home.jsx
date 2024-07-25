
import { useState } from 'react'
import { Header } from '../../components/Header/Header'
import { Shop } from '../../components/Shop/Shop'

import { TechDisplay } from '../../components/TechDisplay/TechDisplay'

import './Home.css'

export const Home = () => {

  const [category, setCategory] = useState('All');

  return (
    <div>
      <Header/>
      <Shop category={category} setCategory={setCategory}/>
      <TechDisplay category={category}/>
    </div>
  )
}
