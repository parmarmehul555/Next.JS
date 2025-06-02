import React from 'react'

const DetailPage = async (
    {params}:{params:Promise<{id:number}>}
) => {
    const {id} = await params;

  return (
    <div>Product ID - {id}</div>
  )
}

export default DetailPage