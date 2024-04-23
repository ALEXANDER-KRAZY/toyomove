"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import BrandDescription from "./BrandDescription";

const AllBrandsLists = () => {
  const router = useRouter();
  return (
    //display all japanese brands in a grid based way
    <div className="
    cursor-pointer
    col-span-5
    ">
        <div className="
        flex
        flex-row
        gap-20
        ">
          
        <div>
        <Image
        onClick={() => router.push("/")}
        src={"/images/hondamain01.png"}
        alt="Honda"
        width={1000}
        height={1000}
        className="
        object-cover
        transition
        cursor-pointer
        hover:scale-110
        "
        />
        <BrandDescription
        onClick={() => router.push("/")}
        title="Honda"
        />
        </div>
        <div>
        <Image
        onClick={() => router.push("/")}
        src={"/images/mazdamain01.jpg"}
        alt="Mazda"
        width={1000}
        height={1000}
        className="
        object-cover
        transition
        cursor-pointer
        hover:scale-110
        "
        />
        <BrandDescription
        onClick={() => router.push("/")}
        title="Mazda"
        />
        </div>
        <div>
        <Image
        onClick={() => router.push("/")}
        src={"/images/subarumain01.png"}
        alt="Subaru"
        width={1000}
        height={1000}
        className="
        object-cover
        transition
        cursor-pointer
        hover:scale-110
        "
        />
        <BrandDescription
        onClick={() => router.push("/")}
        title="Subaru"
        />
        </div>
        <div>
        {/**remember not to use both w/h and fill only use one only\*/}
        <Image
        onClick={() => router.push("/partsCatalogue/toyotaParts")}
        src={"/images/toyotamain01.png"}
        alt="Toyota"
        width={1000}
        height={1000}
        className="
        object-cover
        transition
        cursor-pointer
        hover:scale-110
        "
        />
        <BrandDescription
        onClick={() => router.push("/partsCatalogue/toyotaParts")}
        title="Toyota"
        />
        </div>
        <div>
        <Image
        onClick={() => router.push("/")}
        src={"/images/nissanmain01.png"}
        alt="Nissan"
        width={1000}
        height={1000}
        className="
        object-cover
        transition
        cursor-pointer
        hover:scale-110
        "
        />
        <BrandDescription
        onClick={() => router.push("/")}
        title="Nissan"
        />
        </div>
        <div>
        <Image
        onClick={() => router.push("/")}
        src={"/images/mitsubushimain01.png"}
        alt="Mitsubishi"
        width={1000}
        height={1000}
        className="
        object-cover
        transition
        cursor-pointer
        hover:scale-110
        "
        />
        <BrandDescription
        onClick={() => router.push("/")}
        title="Mitsubishi"
        />
        </div>
        <div>
        <Image
        onClick={() => router.push("/")}
        src={"/images/suzukimain01.png"}
        alt="Suzuki"
        width={1000}
        height={1000}
        className="
        object-cover
        transition
        cursor-pointer
        hover:scale-110
        "
        />
        <BrandDescription
        onClick={() => router.push("/")}
        title="Suzuki"
        />
        </div>
        </div>
        </div>
  )
}

export default AllBrandsLists
