import React from 'react';
import '../../App.css';
import '../Cards.css';
import CardItem from '../CardItem';
import Ser1 from '../../images/ser1.jpg';
import Ser2 from '../../images/ser2.jpg';
import Ser3 from '../../images/ser3.jpg';
import Ser4 from '../../images/ser4.jpg';
import Ser5 from '../../images/ser5.jpg';

export default function Services() {
  return (<>
  <section className="section">
  <div className='services'>
  <h1 >SERVICES</h1>
  </div>
  </section>
  <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={Ser1}
              text='One of our most beautiful place in pakistan'
              label='Kashmir'
              path='/services'
            />
            <CardItem
              src={Ser2}
              text='Beautiful mountains and grasses grouds'
              label='Swat'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={Ser3}
              text='A beautiful seen of mountains from see site'
              label='Hunza'
              path='/services'
            />
            <CardItem
              src={Ser4}
              text='Jheel Saif-ul-malook Pakistan`s most beautiful lake'
              label='Naran'
              path='/services'
            />
            <CardItem
              src={Ser5}
              text='A historical place in lahore is shahi qillah empire of mughals  '
              label='Shahi Qillah'
              path='/services'
            />
          </ul>
        </div>
      </div>
  </>);

}