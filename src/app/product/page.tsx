import Link from 'next/link';
import React from 'react';
import Button from "@/components/Button";
import { revalidatePath } from 'next/cache';

const Contact = async () => {
  const data = await (await fetch("https://67b601f507ba6e59083f68ac.mockapi.io/faculty")).json();

  async function handleDelete(id: number) {
    "use server";
    await fetch("https://67b601f507ba6e59083f68ac.mockapi.io/faculty/" + id, {
      method: "DELETE"
    });
    revalidatePath("/product");
  }
  return (
    <div className='flex flex-col items-center my-1.5'>
      <div className='w-[100%] flex justify-center my-2 items-center'>
        <div className='w-[90%] text-center'>
          <h1 className='p-4 text-xl'>Product Page</h1>
        </div>
        <Link href="/product/add-product" className='w-[10%] cursor-pointer hover:bg-cyan-600 h-12 mx-20 text-white bg-cyan-400 duration-500 place-content-center text-center text-xl rounded-lg'>
          <h1>Add +</h1>
        </Link>
      </div>
      <div className='grid grid-cols-12'>
        {
          data.map((d: any) => (
            <div
              className="max-w-sm mx-3 mb-3 bg-white rounded-2xl shadow-lg col-span-3 overflow-hidden border border-gray-200">
              <img className="w-full h-60 object-cover" src={d.avatar} alt="Kate Graham" />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-800">{d.name}</h2>
                <p className="text-gray-600">Age: <span className="font-medium">{d.age}</span></p>
              </div>
              <Link href={`/product/${d.id}`}><button className='p-2 m-2 bg-blue-400 w-1/3 rounded-xl text-xl'>More</button></Link>

              <Button
                handelDelete={handleDelete}
                id={d.id}
                buttonTitle="Delete"
              />
            </div>

          ))
        }
      </div>

    </div>
  )
}

export default Contact