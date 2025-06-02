import React from 'react';
import mysql from "mysql2/promise";
import Link from 'next/link';

const GetAll = async () => {
    const config = {
        host: "localhost",
        user: "root",
        database: "nextjs demo"
    }
    const conn = await mysql.createConnection(config);

    const [data, fields] = await conn.query("Select * from user");
    return (
        <div className='flex flex-col items-center my-1.5'>
            <div className='w-full flex justify-center items-center'>
                <h1 className='p-4 text-xl text-blue-600 w-[90%] text-center'>Faculty Page</h1>
                <Link
                href="/dbcrud/add"
                className='p-2 w-[10%] rounded-lg text-white hover:shadow-md shadow-gray-400 duration-300 text-center text-xl bg-blue-400 me-2'>
                    <h1>Add +</h1>
                </Link>
            </div>
            <div className='grid grid-cols-12'>
                {
                    data.map((d: any) => (
                        <div
                            className="max-w-sm mx-3 mb-3 bg-white rounded-2xl shadow-lg col-span-3 overflow-hidden border border-gray-200">
                            <img className="w-full h-60 object-cover" src={d.Image} alt="Kate Graham" />
                            <div className="p-6">
                                <h2 className="text-2xl font-semibold text-gray-800">{d.Name}</h2>
                                <p className="text-gray-600">Email: <span className="font-medium">{d.Email}</span></p>
                            </div>
                            <Link href={`/dbcrud/faculty/${d.UserID}`}><button className='p-2 m-2 bg-blue-400 w-1/3 rounded-xl text-xl'>More</button></Link>
                        </div>

                    ))
                }
            </div>

        </div>
    )
}

export default GetAll