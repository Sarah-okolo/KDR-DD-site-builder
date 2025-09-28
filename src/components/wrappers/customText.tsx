import React from "react";

type Props = {
  text?: string;
  align?: "left" | "center" | "right";
  size?: "sm" | "md" | "lg";
};

const CustomText: React.FC<Props> = ({
  text = "Edit me",
  align = "left",
  size = "md",
}) => {
  const fontSize = size === "sm" ? 14 : size === "lg" ? 20 : 16;
  return (
    <p
      // eslint-disable-next-line
      style={{ textAlign: align as any, fontSize, margin: 0 }}
      className="custom-text"
    >
      {text}
    </p>
  );
};

export default CustomText;
