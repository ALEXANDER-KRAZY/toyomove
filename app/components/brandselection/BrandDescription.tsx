"use client";

interface BrandDescriptionProps {
    title: string;
    onClick: () => void;
}

const BrandDescription: React.FC<BrandDescriptionProps> = ({
    title,
    onClick
}) => {
  return (
    <div
    onClick={onClick}
    className="
    hover:text-gray-500
    font-bold
    text-center">
      {title}
    </div>
  )
}

export default BrandDescription
