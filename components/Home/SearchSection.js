import React from 'react'

function SearchSection() {
  return (
    <div className="p-2 md:pd-6 border-2 rounded-xl">
        <p className="text-[20px] font-bold">Get a Ride</p>
        <InputItem type="source" />
        <InputItem type="destination" />
    </div>
  )
}

export default SearchSection