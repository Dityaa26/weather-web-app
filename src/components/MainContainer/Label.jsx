import React from 'react'

const labels = ['High Temperature', 'Low Temperature', 'Humidity', 'Sunrise Time', 'Sunset Time']

const Label = () => {
  return (
    <div className="min-w-[160px] mx-3">
      <h1 className="opacity-0 cursor-default text-center font-bold text-2xl">
        Date
      </h1>
      <div className=" h-[300px] w-full  rounded-lg">
        <div className="flex flex-col items-start justify-end w-full h-1/4">
          <span className="text-slate-700 ">Select Date:</span>
          <input
            type="date"
            className="mb-0 ml-0 py-2 px-1 w-full rounded border-[1px] border-gray-400"
          />
        </div>
        <div className="flex flex-col justify-between h-3/4">
          {labels.map((label) => (
            <p key={label} className="text-md my-2">
              {label}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Label

