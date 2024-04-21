"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import BrandDesc from "./BrandDesc";

const AllBrandsLists = () => {
  const router = useRouter();
  return (
    //display all japanese brands in a grid based way
    <div className="
    cursor-pointer
    group
    col-span-1
    ">
        <div className="flex flex-row gap-5">
          <div>
        {/**remember not to use both w/h and fill only use it only  */}
        <Image
        onClick={() => router.push("/")}
        src={"/logo.png"}
        alt="Toyota"
        width={1000}
        height={1000}
        />
        <BrandDesc
        onClick={() => router.push("/")}
        title="Toyota"
        />
        </div>
        <div>
        <Image
        src={"/logo.png"}
        alt="Nissan"
        width={1000}
        height={1000}
        className="
        object-cover
        transition
        cursor-pointer
        group-hover:scale-110
        "
        />
        <BrandDesc
        onClick={() => {}}
        title="Nissan"
        />
        </div>
        </div>
        </div>
  )
}

export default AllBrandsLists
