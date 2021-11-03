
import Image from 'next/image'
import {
    MenuIcon,
    SearchIcon,
    ShoppingCartIcon,
} from "@heroicons/react/outline";
import { signIn, signOut, useSession } from "next-auth/client";
import { useRouter } from 'next/router'
import { selectItems } from '../slices/basketSlice';
import { useSelector } from 'react-redux';

function Header() {
    const [session] = useSession();
    const router = useRouter();
    const items = useSelector(selectItems)

    return (
        <header>
            {/*top nav*/}
            <div className="flex items-center bg-gray-700 text-gray-900 p-1 flex-grow py-5">
                <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
                    <Image
                        onClick={() => router.push('/')}
                        src='/pixels6.png'
                        width={150}
                        height={40}
                        objectFit="contain"
                        className="cursor-pointer"
                    />
                </div>

                {/*search bar */}
                <div className="hidden sm:flex items-center h-10 rounded-md bg-green-400 hover:bg-green-500 flex-grow cursor-pointer">
                    <input className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none pd-4" type="text" />
                    <SearchIcon className="h-12 p-4" />
                </div>
                {/*Right*/}
                <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
                    <div onClick={!session ? signIn : signOut} className="cursor-pointer link">
                        <p className="hover:underline">
                            {session ? `Hello, ${session.user.name}` : "Sign In"}
                        </p>
                        <p className="font-extrabold md:text-sm">Account</p>
                    </div>
                    <div className="link">
                        <p>Returns</p>
                        <p className="font-extrabold md:text-sm">& Orders</p>
                    </div>

                    <div onClick={() => router.push('/checkout')} className="relative link flex cursor-pointer items-center">
                        <span className="absolute top-0 right-0  md:right-10 h-4 w-4 bg-green-400 text-center rounded-full text-black font-bold">{items.length}</span>
                        <ShoppingCartIcon className="h-10" />
                        <p className="hidden md:inline font-extrabold md:text-sm mt-2">Basket</p>
                    </div>
                </div>
            </div>

            {/*bottom nav*/}
          
        </header>
    )
}

export default Header
