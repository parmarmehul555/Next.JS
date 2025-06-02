import Link from 'next/link';

export default function Header() {
    return (
        <header className="bg-cyan-600 shadow-md px-6 py-4">
            <div className="container mx-auto flex items-center justify-between">
                <div className="flex items-center space-x-6">
                    <div className="text-xl font-bold text-gray-300">SM Tech</div>
                </div>

                <nav className="flex items-center space-x-6 text-gray-300 text-xl relative">
                    <Link href="/" className="hover:text-white">Home</Link>
                    <Link href="/about" className="hover:text-white">About</Link>

                    <div className="group relative">
                        <button className="hover:text-white">
                            Acadamics ▾
                        </button>
                        <div className="absolute hidden group-hover:block bg-cyan-600 shadow-md rounded border w-40 z-10">
                            <Link href="/acadamics/diet" className="block px-4 py-2 hover:text-white">DIET</Link>
                            <Link href="/acadamics/dica" className="block px-4 py-2 hover:text-white">DICA</Link>
                            <Link href="/acadamics/dim" className="block px-4 py-2  hover:text-white">DIM</Link>
                        </div>
                    </div>

                    <Link href="/product" className=" hover:text-white">API(Prod.)</Link>
                    {/* <Link href="/dbcrud" className=" hover:text-white">DB CRUD</Link> */}
                    <Link href="/todos/pagination" className=" hover:text-white">Todo</Link>
                </nav>
            </div>
        </header>
    );
}
