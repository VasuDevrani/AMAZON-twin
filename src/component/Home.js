import React from 'react'
import Banner from './Banner'
import Nav from './Nav'
import Product from './Product'
import './Home.css'

export default function Home() {
  return (
    <div className='home'>
        <Nav/>
        <Banner/>
        <div className="row">
        <div className="row1">
            
        <Product className="first" id="1" title="iphone" price={11.22} rating={5} image={'https://m.media-amazon.com/images/I/71w3oJ7aWyL._SX522_.jpg'}/>
        <Product id="2" title="Enticer Men Analog Black Dial Watch" price={11.22} rating={5} image={'https://m.media-amazon.com/images/I/61FKVerMRWL._AC_UL480_QL65_.jpg'}/>
        <Product id="3" title="SanDisk Cruzer Blade 32GB USB Flash Drive" price={11.22} rating={5} image={'https://m.media-amazon.com/images/I/61DjwgS4cbL._SX450_.jpg'}/>
        
        </div>

        <div className="row2">
            
        <Product id="4" title="iphone" price={11.22} rating={5} image={'https://m.media-amazon.com/images/I/71w3oJ7aWyL._SX522_.jpg'}/>
        <Product id="5" title="iphone" price={11.22} rating={5} image={'https://m.media-amazon.com/images/I/71w3oJ7aWyL._SX522_.jpg'}/>
        <Product id="6" title="iphone" price={11.22} rating={5} image={'https://m.media-amazon.com/images/I/71w3oJ7aWyL._SX522_.jpg'}/>
        <Product id="7" title="iphone" price={11.22} rating={5} image={'https://m.media-amazon.com/images/I/71w3oJ7aWyL._SX522_.jpg'}/>

        </div>

        <div className="row3">
            <Product id="8" title="iphone" price={11.22} rating={5} image={'https://m.media-amazon.com/images/I/71w3oJ7aWyL._SX522_.jpg'}/>
        </div>
        </div> 
    </div>
  )
}
