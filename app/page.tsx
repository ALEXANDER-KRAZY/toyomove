"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import Button from "./components/Button";

const Home = () => {
  const router = useRouter();
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover about Japanese Vehicles
      <br className="max-md:hidden"/>
      <span className="orange_gradient text-center">Toyota and Nissan</span>
      </h1>
      <div className="mt-5"></div>
      <p className="desc text-center">Toyomove is a Japanese vehicle catalogue to find best parts that suit your automobile</p>
      
      {/**Enter parts catalogue or parts write up */}
      <div className='
      flex
      flex-col
      items-center
      justify-between
      gap-3
      md:gap-0
      '>
      <div>
        <Link href="partsCatalogue">
        <Button
        outline=''
        onClick={() => router.push('partsCatalogue')}
        actionLabel="Enter Parts Catalogue"
        />
        </Link>
      </div>
      <div className="mt-2"></div>
      <div>
      <Link href="partsWriteUp">
        <Button
        outline=''
        onClick={() => router.push('partsWriteUp')}
        actionLabel="Enter Parts Write up"
        />
        </Link>
        </div>
      </div>
      </section>
      )
}

export default Home
