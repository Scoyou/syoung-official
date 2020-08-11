import React from 'react';

import Hero from '../components/Hero'
import Carousel from '../components/Carousel'

const Home = (props) => (
  <div>
      <Hero title={props.title} subTitle={props.subTitle} text={props.text}/>
      <Carousel />
  </div>
)

export default Home;
