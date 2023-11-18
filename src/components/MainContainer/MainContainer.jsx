import React from 'react'
import Card from './Card'
import Label from './Label';

const MainContainer = () => {
  return (
    <div className="min-h-screen flex sm:w-10/12 mx-auto mt-14 relative">
      <Label />
      <div className="overflow-x-scroll flex">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default MainContainer