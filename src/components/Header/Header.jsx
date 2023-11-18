import React from 'react'

const Header = () => {
  return (
    <div className="w-full top-0 bg-slate-600 py-2 text-white flex pl-5 items-center justify-between md:px-32">
      <h1 className="font-bold text-white text-2xl">Weather 99</h1>
      <div className="flex flex-col sm:flex-row items-center cursor-pointer justify-center px-2 border-gray-500 border-l-[1px] sm:border-none">
        <img
          width="25"
          height="25"
          src="https://img.icons8.com/ios-filled/100/FFFFFF/reboot.png"
          alt="reboot"
        />
        <button type='submit' onClick={() => location.reload()} className="text-xs sm:text-lg sm:ml-2">Refresh</button>
      </div>
    </div>
  );
}

export default Header