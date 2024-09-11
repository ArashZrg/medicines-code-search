import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const MedicineBox = ({ children }: Props) => {
  return (
    <ul className="w-full h-[80%] overflow-auto p-5 flex flex-col gap-4">
      {children}
    </ul>
  );
};

export default MedicineBox;
