import { SignIn } from '@clerk/nextjs'
import Image from 'next/image'

export default function Page() {
  return (
    <div className="relative h-screen w-full">
      <Image
        src="/UberBanner.png"
        alt="Uber Clone"
        fill
        className="object-cover"
      />
      <div className="absolute top-20 right-5">
        <SignIn />
      </div>
    </div>
  )
}