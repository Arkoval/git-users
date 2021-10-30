import * as React from "react";

export const Title: React.FC<React.HTMLProps<HTMLHeadingElement>> = ({
  children,
}) => <span className="title">{children}</span>;
