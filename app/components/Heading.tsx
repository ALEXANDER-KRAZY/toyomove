"use client";

interface HeadingProps {
    title: string;
    subtitle: string;
    center: boolean;
}

const Heading: React.FC<HeadingProps> = ({
    title,
    subtitle,
    center
}) => {
  return (
    //JSX expressions must have one parent element so the title and subtitle should be under one div
    <div className={center? 'text-center' : 'text-start'}>{/*this div*/}
    <div className="text-2xl font-bold">
      {title}
      </div>
      {/**mt-2 is the space between two divs
       * usually defined on the second div to show effect from the previous div(first div)
       */}
      <div className="
      font-light
      text-neutral-500
      mt-2">
      {subtitle}
    </div>
    </div>
  )
}

export default Heading
