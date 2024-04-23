"use client";

import Image from "next/image"
import ModelDescription from "./ModelDescription"


const ModelListing = () => {
  return (
    <div className="
    px-4
    py-4
    font-bold
    ">
        A
        <div className="
        flex
        flex-row
        gap-20
        ">
        <div>
        <Image
        src={"/images/alphard01.jpg"}
        width={200}
        height={200}
        alt="Alphard"
        />
        </div>
        <div>
        <ModelDescription
        onClick={() => {}}
        title="Alphard"
        />
        </div>
    </div>
    </div>
  )
}

export default ModelListing
