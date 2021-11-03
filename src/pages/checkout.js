import React from 'react'
import Image from 'next/image'
import Header from '../components/Header'
import CheckoutProduct from '../components/CheckoutProduct'
import { useSelector } from 'react-redux';
import { selectItems, selectTotal } from '../slices/basketSlice';
import Currency from 'react-currency-formatter';
import { useSession } from 'next-auth/client';

function Checkout() {
    const items = useSelector(selectItems);
    const [session] = useSession();
    const total = useSelector(selectTotal);


    return (
        <div className="bg-gray-100">
            <Header />

            <main className="lg:flex max-w-screen-2x1 mx-auto">
                {/*left */}
                <div className="flex-grow m-5 shadow-sm">
                    
                    <div className="flex flex-col p-5 space-y-10 bg-white">
                        <h1 className="text-3xl border-b pb-4">{items.length === 0 ? "Your Amazon Basket is empty." : "Shopping Basket"}</h1>

                        {items.map((item, i) => (
                            < CheckoutProduct
                                key={i}
                                id={item.id}
                                title={item.title}
                                rating={item.rating}
                                price={item.price}
                                description={item.description}
                                image={item.image}
                            />
                        ))}
                    </div>
                </div>



                {/*right */}
                <div className="flex flex-col bg-white p-10 shadow-md">
                    {items.length > 0 && (
                        <div>
                            <h2 className="whitespace-nowrap">Subtotal ({items.length} items):
                                <span className="font-bold">
                                    <Currency quantity={total} currency="KES" />
                                </span>
                            </h2>

                            <button
                                disabled={!session}
                                className={`button mt-2 ${!session && 'from-gray-200 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed'}`}>
                                {!session ? 'Sign In to checkout' : 'proceed to checkout'}
                            </button>


                        </div>
                    )}
                </div>
            </main>
        </div>
    )
}

export default Checkout