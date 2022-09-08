import React from 'react';


const ProductCard = ({data}) => {
  return (
    <div>
            {JSON.stringify(data)}

      {data.cardArray.map((productCard,i) =>{
      {JSON.stringify(productCard)}
    })}</div>
  )
}

export default ProductCard