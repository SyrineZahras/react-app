import React from 'react';
import '../Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1> Discover Our Customers </h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/canal+.jpg'
              text='CANAL + GROUP'
              label='CANAL +'
              path='/services'
            />
            <CardItem
              src='images/direct.jpg'
              text='DIRECTV'
              label='DIRECTV'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/sky.jpg'
              text='SKY'
              label='SKY'
              path='/services'
            />
            <CardItem
              src='images/elsys.png'
              text='ELSYS'
              label='AELSYS'
              path='/products'
            />
            <CardItem
              src='images/proxi.png'
              text='PROXIMUS'
              label='PROXIMUS'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
