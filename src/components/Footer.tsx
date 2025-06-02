import React from 'react'

const Footer = () => {
    return (
        <div className="col-span-12 text-xl text-white bg-cyan-600 fixed bottom-0 w-full h-14 place-items-center place-content-center">
            <h1>&copy; {new Date().getFullYear()} SM Tech. All rights reserved.</h1>
        </div>
    )
}

export default Footer