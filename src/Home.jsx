import React from 'react'
import Header from './Header'
import './Home.css'
import Product from './Product'

function Home() {
  return (
    <>
      <Header/>
    <div className='home'>
<img className='home__banner'
src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="prime banner" 
/>
<div className="home__row">
<Product
id='23424'
title="iPhone 13 Pro, 128GB, Sierra Blue - Unlocked (Renewed Premium)"
image="https://m.media-amazon.com/images/I/61jLiCovxVL._AC_SX679_.jpg"
price="200"
rating={3}

/>

<Product
id="43413"
title="YSSOA Backrest and Seat Height Adjustable Swivel Recliner Racing Office Computer Ergonomic Video Game Chair, Without footrest,400lb Capacity, Pink"
image="https://m.media-amazon.com/images/I/61xNKvGmStL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
price="56"
rating={5}

/>

</div>

<div className="home__row">
<Product
title="Bowflex SelectTech 552 Adjustable Dumbbells"
image="https://m.media-amazon.com/images/I/71+pOdQ7iKL._AC_SX679_.jpg"
price="459"
rating={4}

/>

<Product
title="Scratching Toy Pet Supplies Cat Scratcher Ball for Small Pets Playing Small Medium Large Cats , Panda"
image="https://m.media-amazon.com/images/I/71acs0UnnnL._AC_SX679_.jpg"
price="200"
rating={5}

/>

<Product
title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses "
image="https://m.media-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
price="200"
rating={5}
/>

</div>

<div className="home__row">
  
<Product
title="Sceptre 30-inch Curved Gaming Monitor 21:9 2560x1080 Ultra Wide/ Slim HDMI DisplayPort up to 200Hz Build-in Speakers, Metal Black (C305B-200UN1)"
image="https://m.media-amazon.com/images/I/612RvBYr4fL._AC_SX679_.jpg"
price="513"
rating={5}
/>

</div>

    </div>
</>
  )
}

export default Home
