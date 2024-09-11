import Wrapper from "../components/wrapper/Wrapper";
import Container from "../components/container/Container";
import SearchBox from "../components/searchBox/SearchBox";
import MedicineBox from "../components/medicineBox/MedicineBox";
import InfoCard from "../components/infoCard/InfoCard";
import list from "../mock/medicine";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
const Home = () => {
  const [updateList, setUpdateList] = useState([...list]);

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    toast.success("کد با موفقیت کپی شد");
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const newList = list.filter(
      (item) =>
        item.name.toLowerCase().startsWith(inputValue) ||
        item.name.startsWith(inputValue)
    );
    setUpdateList(newList);
  };
  return (
    <Wrapper>
      <Container>
        <div>
          <Toaster />
        </div>
        <SearchBox handleOnChange={(e) => handleOnChange(e)}></SearchBox>
        <MedicineBox>
          {updateList.map((item, index) => (
            <InfoCard
              handleCopy={handleCopy}
              name={item.name}
              code={item.code}
              key={index}
            />
          ))}
        </MedicineBox>
      </Container>
    </Wrapper>
  );
};

export default Home;
