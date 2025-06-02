import { PrismaClient } from '@/generated/prisma';
import { Plus, Upload, X, Check, Calendar, User, Hash, Image } from 'lucide-react';
import { redirect } from 'next/navigation';

const AddProduct = () => {

    const addProduct = async (formData: FormData) => {
        "use server";
        const obj = {
            "name": formData.get("name"),
            "age": formData.get("age"),
            "avatar": formData.get("avatar")
        }
        console.log(obj);

        await fetch("https://67b601f507ba6e59083f68ac.mockapi.io/faculty", {
            method: "POST",
            body: JSON.stringify(obj),
            headers:{
                'Content-Type':"application/json"
            }
        });
        redirect("/product");
    }
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
            <div className="max-w-2xl mx-auto">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-cyan-600 to-blue-600 px-8 py-6">
                        <h1 className="text-2xl font-bold text-white flex items-center gap-3">
                            <Plus className="w-6 h-6" />
                            Add New Product
                        </h1>
                        <p className="text-blue-100 mt-2">Fill in the details to create a new product</p>
                    </div>

                    {/* Form */}
                    <form action={addProduct}>
                        <div className="p-8 space-y-6">
                            {/* Name */}
                            <div className="space-y-2">
                                <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                                    <User className="w-4 h-4" />
                                    Name *
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Enter product name"
                                    className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all border-gray-200
                                    }`}
                                />
                            </div>

                            {/* Age */}
                            <div className="space-y-2">
                                <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                                    <Calendar className="w-4 h-4" />
                                    Age *
                                </label>
                                <input
                                    type="text"
                                    name="age"
                                    placeholder="Enter age"
                                    min="0"
                                    className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all border-gray-200
                                    }`}
                                />
                            </div>

                            {/* ID */}
                            <div className="space-y-2">
                                <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                                    <Hash className="w-4 h-4" />
                                    Image *
                                </label>
                                <input
                                    type="text"
                                    name="avatar"
                                    placeholder="Enter unique ID"
                                    className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all border-gray-200
                                    }`}
                                />
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

export default AddProduct