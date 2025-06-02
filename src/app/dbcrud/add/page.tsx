import React from 'react';
import mysql from "mysql2/promise";
import { redirect } from 'next/navigation';

const FacultyAdd = async () => {
    const config = {
        host: "localhost",
        user: "root",
        database: "nextjs demo"
    }
    const conn = await mysql.createConnection(config);

    const create = async (formData:FormData)=>{
        "use server";

        await conn.query(`INSERT INTO User Values (${formData.get("Name")},${formData.get("Email")},${formData.get("Image")})`);
        
        redirect("/dbcrud");
    }


    return (
        <div className='w-full h-[149%] bg-gray-100 flex items-center justify-center'>
            <form 
            action={create}
            className='bg-white p-8 rounded-xl shadow-md w-full max-w-md'>
                <h2 className='text-2xl font-bold mb-6 text-center text-blue-600'>Add Faculty</h2>

                <div className='mb-4'>
                    <label className='block text-gray-700 font-semibold mb-1'>Name</label>
                    <input
                        type='text'
                        name='Name'
                        placeholder='Enter name'
                        className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400'
                    />
                </div>

                <div className='mb-4'>
                    <label className='block text-gray-700 font-semibold mb-1'>Email</label>
                    <input
                        type='text'
                        name='Email'
                        placeholder='Enter email'
                        className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400'
                    />
                </div>

                <div className='mb-6'>
                    <label className='block text-gray-700 font-semibold mb-1'>Image URL</label>
                    <input
                        type='text'
                        name='Image'
                        placeholder='Enter image URL'
                        className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400'
                    />
                </div>

                <button
                    type='submit'
                    className='w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-200'
                >
                    Submit
                </button>
            </form>
        </div>
    )
}

export default FacultyAdd
