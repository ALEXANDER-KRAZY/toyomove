"use client";

interface ModelDescriptionProps {
    title: string;
    onClick: () => void;
}

const ModelDescription: React.FC<ModelDescriptionProps> = ({
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

export default ModelDescription
