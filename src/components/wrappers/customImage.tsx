import React from "react";

type Props = {
  src?: string;
  alt?: string;
  width?: string | number;
  height?: string | number;
};

const CustomImage: React.FC<Props> = ({
  src = "https://via.placeholder.com/300x150",
  alt = "image",
  width = "100%",
  height = "auto",
}) => {
  return (
    <img src={src} alt={alt} style={{ width, height, objectFit: "cover" }} />
  );
};

export default CustomImage;
