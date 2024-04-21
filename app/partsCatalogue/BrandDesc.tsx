"use client";

interface BrandDescProps {
    title: string;
    onClick: () => void;
}

const BrandDesc: React.FC<BrandDescProps> = ({
    title,
    onClick
}) => {
  return (
    <div
    onClick={onClick}
    className="font-bold text-center">
      {title}
    </div>
  )
}

export default BrandDesc
