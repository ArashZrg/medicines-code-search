interface Props {
  name: string;
  code: string;
  handleCopy: (code: string) => void;
}

const InfoCard = ({ name, code, handleCopy }: Props) => {
  return (
    <div className="bg-[rgba(250,250,250,0.5)] w-full h-[20%] rounded-lg flex justify-between p-5">
      <div className="flex justify-center items-center gap-3 ">
        <p>Name:</p>
        <div className="flex justify-center items-center bg-black w-fit p-5 h-2 rounded-xl text-white font-sans text-xl ">
          {name}
        </div>
      </div>
      <div className="flex justify-center items-center gap-3 ">
        <p>Code:</p>
        <div
          onClick={() => handleCopy(code)}
          className="flex justify-center items-center bg-blue-400 w-fit p-5 h-2 rounded-xl text-white font-sans text-xl cursor-pointer hover:scale-105 transition-all "
        >
          {code}
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
