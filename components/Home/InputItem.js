import React from 'react'

function InputItem({type}) {
  return (
    <div className="bg-slate-200 p-3 rounded-lg mt-3 flex items-center gap-4">
      <Image src="/source.png" alt="source" width={15} height={15} />
      <input type="text" placeholder={`${type === "source" ? "Where from?" : "Where to?"}`} className="bg-transparent outline-none w-full"></input>
    </div>
  )
}

export default InputItem