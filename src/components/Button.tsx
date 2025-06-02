"use client";
import React from 'react';

const Button = ({ id, buttonTitle, handelDelete }: { id: number, buttonTitle: string, handelDelete: (id:number) => void }) => {


  return (
    <button
      onClick={()=>{handelDelete(id)}}
      className='p-2 m-2 bg-red-500 text-white w-1/3 rounded-xl text-xl'>{buttonTitle}</button>
  )
}

export default Button