interface Props {
  handleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const SearchBox = ({ handleOnChange }: Props) => {
  return (
    <div className="w-full h-[20%]  p-5 flex justify-center items-center gap-2">
      <label htmlFor="input">Search :</label>
      <input
        onChange={handleOnChange}
        id="input"
        type="text"
        placeholder="Enter Medicine Name ..."
        className="p-3 border-solid border-[0.1rem] border-black outline-none rounded-lg"
      />
    </div>
  );
};

export default SearchBox;
