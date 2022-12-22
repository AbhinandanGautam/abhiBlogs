import Link from "next/link"
import Image from "next/image"

function Header() {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
        <div className="flex items-center space-x-2">
            <Link href="/">
                <Image className="rounded-full" src="/mylogo.png" width={60} height={60} alt="logo" />
            </Link>
            <h1>Abhi's Blogs</h1>
        </div>
        <div>
            <Link href="https://www.linkedin.com/in/abhinandan-gautam-4993881ba/"
            className="px-5 py-3 text-sm md:text-base bg-gray-900 text-[#F7AB0A] flex items-center rounded-full text-center">Follow On Instagram</Link>
        </div>
    </header>
  )
}

export default Header