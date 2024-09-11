import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
const Wrapper = ({ children }: Props) => {
  return (
    <div className="flex justify-center items-center w-full h-screen bg-doctor bg-cover bg-center">
      {children}
    </div>
  );
};

export default Wrapper;
