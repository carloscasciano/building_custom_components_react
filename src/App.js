import React from 'react';
import Shoe from './components/Shoe'
import dummyShoes from './dummyData/dummyShoes'

function App() {
  return (
    <>
      <div style={{display:"flex", flexWrap: "wrap"}}>
      {
        dummyShoes.map(shoe => 
          <Shoe 
            key={shoe.shoeId}
            shoeInfo={shoe}
          />
        )
      }
      </div>    
    </>
  )
}

export default App;
