import { PrismaClient } from '@/generated/prisma';
import React from 'react';
import { Plus, Upload, X, Check, Calendar, User, Hash, Image, Edit, Edit2, Edit2Icon, Edit3, EditIcon } from 'lucide-react';
import { redirect } from 'next/navigation';

const page = async ({ params }: { params: Promise<{ id: number }> }) => {
    const { id } = await params;
    const prisma = new PrismaClient();

    const task = await prisma.todo.findUnique({ where: { TodoID: Number(id) } });
    console.log(task);

    const users = await prisma.user.findMany({ omit: { Email: true, Image: true } });

    async function updateTask(formData: FormData) {
        "use server";
        const prisma = new PrismaClient();
        const data = {
            "TodoTitle": String(formData.get("TodoTitle")),
            "TodoStatus": formData.get("TodoStatus") == "true" ? true : false,
            "UserID": Number(formData.get("UserID"))
        };

        await prisma.todo.update({ data, where: { "TodoID": Number(id) } });
        redirect("/todos/" + formData.get("UserID"));
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
            <div className="max-w-2xl mx-auto">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-cyan-600 to-blue-600 px-8 py-6">
                        <h1 className="text-2xl font-bold text-white flex items-center gap-3">
                            <EditIcon className="w-6 h-6" />
                            Edit Todo
                        </h1>
                        {/* <p className="text-blue-100 mt-2">Fill in the details to create a new Todo</p> */}
                    </div>

                    {/* Form */}
                    <form action={updateTask}>
                        <div className="p-8 space-y-6">
                            {/* Name */}
                            <div className="space-y-2">
                                <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                                    <User className="w-4 h-4" />
                                    Todo Title*
                                </label>
                                <input
                                    type="text"
                                    name="TodoTitle"
                                    defaultValue={task?.TodoTitle}
                                    placeholder="Enter product name"
                                    className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all border-gray-200
                                    }`}
                                />
                            </div>

                            {/* Age */}
                            <div className="space-y-2">
                                <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                                    <Calendar className="w-4 h-4" />
                                    Todo Status *
                                </label>
                                <div className='flex justify-start items-center w-[30%]'>
                                    <input
                                        type="radio"
                                        name="TodoStatus"
                                        value={"true"}
                                        defaultChecked={task?.TodoStatus === true}
                                        className={`w-full px-4 py-3 
                                        }`}
                                    /> Completed
                                    <input
                                        type="radio"
                                        name="TodoStatus"
                                        value={"false"}
                                        defaultChecked={task?.TodoStatus === false}
                                        className={`w-full px-4 py-3 
                                        }`}
                                    /> Pending
                                </div>
                            </div>
                            <input type='hidden' name='UserID' value={task?.UserID} />

                            {/* ID */}
                            <div className="space-y-2">
                                <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                                    <Hash className="w-4 h-4" />
                                    User *
                                </label>
                                <div>
                                    <select
                                        disabled
                                        defaultValue={task?.UserID}
                                        className='w-full p-2 rounded-lg text-gray-500 cursor-not-allowed focus:border-cyan-400 border border-gray-200'>
                                        <option value={"null"}>-- Select User --</option>
                                        {
                                            users.map((u: any) => (<option defaultValue={task?.UserID} value={u.UserID}>{u.Name}</option>))
                                        }
                                    </select>
                                </div>
                            </div>

                            {/* Form Actions */}
                            <div className="flex gap-4 pt-6">
                                <input
                                    type="submit"
                                    className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default page