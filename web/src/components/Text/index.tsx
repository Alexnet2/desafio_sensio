import { FC, HtmlHTMLAttributes } from "react";

const Text: FC<HtmlHTMLAttributes<HTMLParagraphElement>> = ({
  children,
  ...rest
}) => {
  return <p {...rest}>{children}</p>;
};

export default Text;
