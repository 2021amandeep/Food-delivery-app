import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Restaurants!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/4.jpg'
              text='THE DESI DELI'
              ratings='🌟 4.5 Rating'
              label='Pizzas, Italians,American'
              path='/product'
            />
            <CardItem
              src='images/5.jpg'
              text='THE NCR CAFE'
              ratings='🌟 4.5 Rating'
              label='N-Indain,Chinese,Indian'
              path='/product'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/6.jpg'
              text='BIRIYANI BLUES'
              ratings='🌟 3.5 Rating'           
              label='Hyderabadi,Lucknowi'
              path='/product'
            />
            <CardItem
              src='images/7.jpg'
              text='BHUKKAD CHOUPAL'
              ratings='🌟 4.7 Rating'            
              label='Chinese,Mughlai'
              path='/product'
            />
            <CardItem
              src='images/8.jpg'
              text='MAGADH FLAVOUR'
              ratings='🌟 3.9 Rating'
              label='Mughlai,Chinese'
              path='/product'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Cards;
