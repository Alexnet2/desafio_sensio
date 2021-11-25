import { FC, HtmlHTMLAttributes } from "react";

const Box: FC<HtmlHTMLAttributes<HTMLDivElement>> = ({ children, ...rest }) => {
  return <div {...rest}>{children}</div>;
};

export default Box;
