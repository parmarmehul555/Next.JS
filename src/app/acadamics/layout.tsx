import React from 'react'

const Acadamics = (
    {children}:{children:React.ReactElement}
) => {
  return (
    <div className='flex flex-col w-full justify-center items-center'>
        <h1 className='text-2xl p-4 text-blue-600'>Acadamics</h1>
        <div>{children}</div>
    </div>
  )
}

export default Acadamics