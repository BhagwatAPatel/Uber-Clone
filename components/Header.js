import React from 'react'
import Image from 'next/image'
import { UserButton } from "@clerk/nextjs";

function Header() {
    const headerMenu = [
        {
            id: 1,
            name: "Ride",
            icon: '/Taxi.png'
        },
        {
            id: 2,
            name: "Package",
            icon: '/Package1.png'
        }
    ]
  return (
    <div className="p-4 pb-3 pl-10 border-b-4 border-gray-200 flex items-center justify-between">
        <div className="flex items-center gap-24">
            <Image src="/UberLogo.png"
                alt="Logo"
                width={70}
                height={70}
            />
            <div className="flex items-center gap-6">
                {headerMenu.map((item) => (
                    <div key={item.id} className="flex items-center gap-2">
                        <Image src={item.icon}
                            alt={item.name}
                            width={17}
                            height={17}
                        />
                        <h2 className="text-sm font-medium">{item.name}</h2>
                    </div>
                ))}
            </div>
        </div>
        <UserButton />
    </div>
  )
}

export default Header