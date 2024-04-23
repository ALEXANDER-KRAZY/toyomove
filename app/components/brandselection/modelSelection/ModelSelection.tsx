"use client";

import Heading from "../../Heading"
import ModelListing from "./ModelListing"

const ModelSelection = () => {
  return (
    <div>
      <Heading 
      center
      title="Choose your Toyota Model"
      subtitle="Pick from a variety of these models"
      />
      <ModelListing />
    </div>
  )
}

export default ModelSelection
