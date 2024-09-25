import React from "react";
import style from "@/components/button/button-style.module.scss";

type Variants = "primary" | "secondary";
type TypeButton = "red" | "blue";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  title: string;
  variant: Variants;
  typeButton: TypeButton;
};

export default function Button({
  title,
  variant = "primary",
  typeButton = "blue",
  ...props
}: ButtonProps) {
  return (
    <button
      className={
        style.button +
        " " +
        (typeButton === "blue"
          ? variant === "primary"
            ? style.buttonGradient
            : style.buttonNormal
          : variant === "primary"
          ? style.buttonGradientRed
          : style.buttonNormalRed)
      }
      {...props}
    >
      {title}
    </button>
  );
}
