import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCategoryActive } from '../reducers/cart/cartSlice'

const FilterBar = () => {
    const dispatch = useDispatch()

    const { categoryActive } = useSelector(state => state.cart)

    const handleCategory = (e) => {
        console.log(e.target.name);
        const isSelected = e.target.name
        
        if (isSelected) {
            return dispatch(setCategoryActive(isSelected))
        }

        dispatch(setCategoryActive(''))
    }

  return (
    <div className='filter-by-type'>
        <span>Filter</span>

             <div className="container-groups-type">
             <div className='group-type'>
                    <button onClick={handleCategory} className={categoryActive == '' ? 'button-categoryActive' : ''}>All Products</button>
				</div>   
             <div className='group-type'>
                    <button name='Games' onClick={handleCategory} className={categoryActive == 'Games' ? 'button-categoryActive' : ''}>Games</button>
				</div>
				<div className='group-type'>
                    <button name='Technology' onClick={handleCategory} className={categoryActive == 'Technology' ? 'button-categoryActive' : ''}>Technology</button>
				</div>
				<div className='group-type'>
                    <button name='Music' onClick={handleCategory} className={categoryActive == 'Music' ? 'button-categoryActive' : ''}>Music</button>
				</div>
             </div>
      </div>
  )
}

export default FilterBar