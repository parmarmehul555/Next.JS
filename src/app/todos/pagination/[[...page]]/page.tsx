import React from 'react';
import { Prisma, PrismaClient } from '@/generated/prisma';
import Link from 'next/link';
import { revalidatePath } from 'next/cache';

const Todo = async ({ params }: { params: Promise<{ page: number }> }) => {
  const { page } = await params;
  const prisma = new PrismaClient();

  let startPoint = 0;

  if (page) {
    startPoint = page;
  }

  // Mathamatical Eq for Pagination
  // const endPoint = (startPoint - 1) * Number(process.env.PAGINATION_PER_PAGE_DATA);


  const data = await prisma.user.findMany({
    skip: Number(startPoint),
    take: Number(process.env.PAGINATION_PER_PAGE_DATA)
  });

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className='w-[100%] flex justify-center my-2 items-center'>
          <div className='w-[90%] text-center'>
            <h1 className='p-4 text-xl'>User Management</h1>
          </div>
          <Link href="/todos/add/todo" className='w-[10%] cursor-pointer hover:bg-cyan-600 h-12 text-white bg-cyan-400 duration-500 place-content-center text-center text-xl rounded-lg'>
            <h1>Add +</h1>
          </Link>
        </div>
        {/* Desktop Table View */}
        <div className="hidden md:block bg-white rounded-lg shadow-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-cyan-600 text-white">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">
                  User ID
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">
                  Profile
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-4 text-center text-sm font-semibold uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {data.map((user, index) => (
                <tr key={user.UserID.toString()} className="hover:bg-gray-50 transition-colors duration-200">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <span className="inline-flex items-center justify-center w-8 h-8 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                        {user.UserID.toString()}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="h-12 w-12 rounded-full overflow-hidden border-2 border-gray-200 shadow-sm">
                        <img
                          src={user.Image}
                          alt={user.Name}
                          className="h-full w-full object-cover" />
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{user.Name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-600">
                      <a href={`mailto:${user.Email}`} className="hover:text-blue-600 transition-colors">
                        {user.Email}
                      </a>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    <div className="flex justify-center space-x-2">
                      <Link
                        href={`/todos/${user.UserID}`} className="bg-cyan-500 hover:bg-cyan-600 text-white px-3 py-1 rounded-md text-sm font-medium transition-colors duration-200">
                        View
                      </Link>
                      <button  
                      onClick={async ()=>{
                        "use server";
                        const prisma = new PrismaClient();
                        try{
                          await prisma.user.delete({where:{UserID : Number(user.UserID)}});
                        }catch(e){
                          console.log(e);
                          
                        }
                      }}
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-sm font-medium transition-colors duration-200">
                        Delete
                      </button>

                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Todo