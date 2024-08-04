import React from 'react'
import RetailPost from './RetailPost'

export default function RetailSection({ Section }) {
    // This should be handled with a backend
    let image
    let description
    let price
    let originalPrice
    switch(Section){
        case "Away": {
            image = 'model.jpg'
            description = 'LFC NIKE MENS 24/25 AWAY STADIUM JERSEY'
            price = '80.00'
            break;
        }
        case "Training": {
            image = 'model2.jpg'
            description = 'LFC Nike Mens 24/25 Away Pre-Match Short Sleeved Top Washed Teal'
            price = '55.00'
            break;
        }
        case "Like": {
            image = 'model3.jpg'
            description = 'LFC Nike Mens 23/24 Dri-FIT Strike Track Jacket '
            price = '30.00'
            originalPrice = '74.95'
            break;
        }
    }

  return (
    <div className='flex gap-10'>
        <RetailPost Image={image} Description={description} Price={price} OriginalPrice={originalPrice} />
        <RetailPost Image={image} Description={description} Price={price} OriginalPrice={originalPrice} />
        <RetailPost Image={image} Description={description} Price={price} OriginalPrice={originalPrice} />
        <RetailPost Image={image} Description={description} Price={price} OriginalPrice={originalPrice} />
        <RetailPost Image={image} Description={description} Price={price} OriginalPrice={originalPrice} />
    </div>
  )
}
