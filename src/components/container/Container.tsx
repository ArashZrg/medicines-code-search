import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Container = ({ children }: Props) => {
  return (
    <div className="p-5 flex flex-col gap-5 justify-start items-center w-[70%] h-[80%] bg-[rgba(250,250,250,0.8)] rounded-lg shadow-inner">
      {children}
    </div>
  );
};

export default Container;
