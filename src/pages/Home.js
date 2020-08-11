import React from 'react';

import Hero from '../components/Hero'

const Home = (props) => (
  <div>
      <Hero title={props.title} subTitle={props.subTitle} text={props.text}/>
      <p>From Home</p>
  </div>
)

export default Home;
