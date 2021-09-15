import React from 'react'

function CheckoutProduct({ id, title, price, description, category, image }) {
    return (
        <div className="gird grid-cols-5">
            <Image src={image} height={200} objectFit="contain" />

            {/*middle*/}
            <div className="col-span-3 mx-5">
                <p>{title}</p>
                <div>
                    {Array(rating).fill().map(_, i => (
                        <StarIcon key={i} className="h-5 text-yellow-500" />
                    ))}
                </div>

            </div>

        </div>
    )
}

export default CheckoutProduct
