"use client";

import Heading from "../Heading";
import AllBrandsLists from "./AllBrandsLists";

const CarSelection = () => {
  return (
    <div>
    <Heading
    center
    title="Choose your car"
    subtitle="Select your car based on its brand"
    />
    <div className="
    grid-cols-0
    grid-cols-1
    sm:grid-cols-2
    md:grid-cols-3
    lg:grid-cols-4
    xl:grid-cols-5
    2xl:grid-cols-6
    ">
    <AllBrandsLists /> 
    </div>
    </div>
  )
}

export default CarSelection
