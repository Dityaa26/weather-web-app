import React from 'react'

const Shimmer = () => {
  return (
    <div className="flex flex-col-reverse mx-4 pb-1 mt-8 sm:flex-row sm:w-10/12 sm:mx-auto sm:items-center justify-between border-b-[1px] border-gray-400">
      <div>
        <h1 className="font-bold text-2xl sm:text-3xl flex items-center">
          <img
            src="https://img.icons8.com/external-anggara-basic-outline-anggara-putra/24/external-location-ui-anggara-basic-outline-anggara-putra.png"
            alt="external-location-ui-anggara-basic-outline-anggara-putra"
          />
          City, Country
        </h1>
        <p className="text-slate-700">{`${0} N & ${0} E`}</p>
      </div>
      <div className="w-10/12 sm:w-4/12 sm:mx-0 mx-auto flex items-center h-10 bg-white px-2 rounded-lg shadow-md sm:mb-3 mb-5">
        <input
          type="text"
          className="w-full outline-none placeholder:italic"
          placeholder="Search your city here..."
        />
        <button>
          <img
            width="40"
            height="40"
            src="https://img.icons8.com/fluency-systems-regular/48/search--v1.png"
            alt="search--v1"
            className="p-1"
          />
        </button>
      </div>
    </div>
  );
}

export default Shimmer