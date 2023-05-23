import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'
import  {Button} from '../styles/Button'

const HeroSection = () => {
  return (
    <Wrapper>
<div className='container'>
    <div className='grid grid-two-column'>
        <div className='hero-section-data'>
            <p className='intro-data'>Welcome to</p>
            <h1> Thapa Store</h1>
            <p>Lorem Ipsum</p>
          <Link></Link>
        </div>
    </div>

</div>
    </Wrapper>
  )
}

const Wrapper=styled.section`

`
export default HeroSection