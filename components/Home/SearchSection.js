import React from 'react'

function SearchSection() {
  return (
    <div className="p-2 md:p-6 border-2 rounded-xl">
        <p className="text-[20px] font-bold">Get a Ride</p>
        <InputItem type="source" />
        <InputItem type="destination" />

        <button className=" p-3 bg-black text-white w-full mt-5 rounded-lg">Search</button>
    </div>
  )
}

export default SearchSection