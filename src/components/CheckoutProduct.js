import { StarIcon } from '@heroicons/react/outline'
import React from 'react'
import Image from 'next/image'
import Currency from 'react-currency-formatter';
import { useDispatch } from 'react-redux';
import { addToBasket, removeFromBasket } from '../slices/basketSlice';

function CheckoutProduct({ id, title, price, rating, description, category, image }) {
    const dispatch = useDispatch();

    const addItemToBasket = () => {
        const product = { id, title, price, rating, description, category, image }
        //push item to redux store
        dispatch(addToBasket(product))
    }

    const removeItemFromBasket = () => {
        //remove the item from redux
        dispatch(removeFromBasket({ id }))
    }
    return (
        <div className="grid grid-cols-5">
            <Image src={image} height={200} width={200} objectFit="contain" />

            {/*middle*/}
            <div className="col-span-3 mx-5">
                <p>{title}</p>
                <div className="flex">
                    {Array(rating).fill().map((_, i) => (
                        <StarIcon key={i} className="h-5 text-yellow-500" />
                    ))}
                </div>

                <p className="text-xs my-2 line-clamp-3">{description}</p>
                <Currency quantity={price} currency="KES" />
                <p className="absolute top-2 right-2 text-xs italic text-gray-400">{category}</p>
            </div>

            {/*right add/remove buttons*/}
            <div className="flex flex-col space-y-2 my-auto justify-self-end">
                <button className="button" onClick={addItemToBasket}>Add to Basket</button>
                <button className="button" onClick={removeItemFromBasket}>Remove from Basket</button>
            </div>

        </div>
    )
}

export default CheckoutProduct
