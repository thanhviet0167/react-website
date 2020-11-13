import React from 'react'
// import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import CardItem from './CardItem'
import './Cards.css'
import card_product from './data/data_products'

function Cards() {
   
    const list_card = card_product.map((item, index) =>
                    
                    
                        
                <CardItem src={item.path} id={item.id} text= {item.description}
                label={item.product_name} path='/products'/>
                
                 
                
        )
    return (
        
        <div className='cards'>
            <h1>Check out these EPIC Destinations!</h1>
            <div className="cards__container">
                <div className='cards__wrapper'>
                    
                    {/* {list_card} */}
            
                     <ul className='cards__items'>
                        {list_card}
                    </ul>
                    {/* <ul className='cards__items'>
                        <CardItem src='images/food_1.jpg' text='Explore the hidden waterfall deep inside the Amazon Jungle'
                        label='Adventure' path='/products'/>
                        <CardItem src='images/food_2.jpg' text='Travel through the Islands of Bali in a Private Cruise'
                        label='Luxury' path='/products'/>
                    </ul>
                    <ul className='cards__items'>
                        <CardItem src='images/food_3.jpg' text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
                        label='Mystery'path='/products'/>
                        <CardItem src='images/food_4.jpg' text='Experience Football on Top of the Himilayan Mountains' 
                        label='Adventure' path='/products' />
                        <CardItem src='images/food_5.jpg' text='Ride through the Sahara Desert on a guided camel tour'
                        label='Adrenaline' path='/products'/>
                    </ul> */}
                </div>
            </div>
            
        </div>
        
    )
}

export default Cards
