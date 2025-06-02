import { PrismaClient } from '@/generated/prisma'
import React from 'react';
import { ArrowLeft, Edit, Trash2, Calendar, User, Mail, Hash, CheckCircle, XCircle, Clock } from 'lucide-react';
import Link from 'next/link';

const FacultyDetail = async (
  { params }: { params: Promise<{ UserID: number }> }
) => {
  const { UserID } = await params;
  const prisma = new PrismaClient();
  const data = await prisma.user.findUnique({ where: { UserID: Number(UserID) }, include: { todo: true } });
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <Link href="/todos/pagination"><button className="cursor-pointer flex items-center text-gray-600 hover:text-gray-800 transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to List
          </button></Link>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Profile Header */}
          <div className="bg-gradient-to-r from-cyan-600 to-blue-600 p-6 text-white">
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
              <div className="relative">
                <img
                  src={data?.Image}
                  alt={data?.Name}
                  className="w-24 h-24 rounded-full border-4 border-white shadow-lg object-cover"

                />
              </div>
              <div className="text-center md:text-left flex-1">
                <h1 className="text-3xl font-bold mb-2">{data?.Name}</h1>
                <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-4">
                  <div className="flex items-center justify-center md:justify-start">
                    <Mail className="w-4 h-4 mr-2" />
                    <span className="text-blue-100">{data?.Email}</span>
                  </div>
                  <div className="flex items-center justify-center md:justify-start">
                    <Hash className="w-4 h-4 mr-2" />
                    <span className="text-blue-100">ID: {data?.UserID}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Todo Details */}
          <div className="p-6 space-y-6">
            {/* Todo Information */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <CheckCircle className="w-5 h-5 mr-2 text-blue-600" />
                Todo Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  {
                    data?.todo && data?.todo.map((t) => (
                      <div 
                      key={t.TodoID}
                      className='flex gap-2 items-center'>
                      <div className={`${t.TodoStatus ? "bg-green-400/80" : "bg-red-400/80"} p-3 border my-3 border-gray-200 rounded-lg flex items-center gap-2`}>
                        {
                          t.TodoStatus ? <CheckCircle /> : <Clock />
                        } <p className="text-gray-900">{t.TodoTitle}</p>
                      </div>
                      <Link href={`/todos/edit/${t.TodoID}`} className="bg-blue-500 hover:bg-blue-600 text-white  rounded-md text-xl font-medium transition-colors duration-200 p-3 ">
                        Edit
                      </Link>
                      </div>
                    ))
                  }
                  {data?.todo.length == 0 && <h1 className='text-gray-500'>No Todo Found!</h1>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FacultyDetail