import React from 'react';
import Shoe from './components/Shoe'
import dummyShoes from './dummyData/dummyShoes'
import {MockSiteMainSkeleton, MockHeaderSkeleton, MockDataAreaSkeleton, MockSideBars} from './mockSiteStyles'

function App() {
  return (
    <>

      <MockSiteMainSkeleton>
        <MockHeaderSkeleton>
          <p>WHAT'S NEW</p>
          <p>CLOTHING</p>
          <p>SHOES</p>
          <p>ACESSORIES</p>
          <p>ABOUT</p>
        </MockHeaderSkeleton>
        <MockDataAreaSkeleton>
          <MockSideBars/>


          <div style={{display:"flex", flexWrap: "wrap", justifyContent: "center"}}>
            {
              dummyShoes.map(shoe => 
                <Shoe 
                  key={shoe.shoeId}
                  shoeInfo={shoe}
                />
              )
            }
          </div>


          <MockSideBars/>
        </MockDataAreaSkeleton>
      </MockSiteMainSkeleton>



          
    </>
  )
}

export default App;
