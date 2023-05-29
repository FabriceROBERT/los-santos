import React from "react";

export default function Span(props) {
  const { theme, variant, className, alignement, children } = props;
  let align, font;

  switch (alignement) {
    case "center":
      align = "justify-center";
      break;
    case "right":
      align = "justify-end";
      break;
    default:
      align = "text-start";
  }
  switch (theme) {
    case "titre":
      font = "text-white text-2xl tracking-widest uppercase ";
      break;
    case "soustitre":
      font = "text-white text-lg tracking-wide uppercase";
      break;
    default:
      font = "bg-red-500";
  }
  switch (variant) {
    case "boom":
      return (
        <div className={`flex ${align}`}>
          {children}
          {/* <h2 className={`${align}`}> {children}</h2> */}
        </div>
      );
    default:
      return (
        <div className={`flex ${align}`}>
          <div className={`${className} ${font}`}>{children}</div>
        </div>
      );
  }
}
