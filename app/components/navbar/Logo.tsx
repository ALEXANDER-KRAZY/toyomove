"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Logo = () => {
    const router = useRouter();
  return (
      <Link href="/" className="flex- gap-2 flex-center">
    <Image
    onClick={() => router.push('/')} //reset categories
    alt="logo"
    className="hidden md:block cursor-pointer"
    height="50"
    width="50"
    src="/logo.png"/>
    <h6 className='logo_text'>Toyomove</h6>
      </Link>
  )
}

export default Logo;