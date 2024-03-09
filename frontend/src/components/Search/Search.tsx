import { BiCart, BiSearch } from "react-icons/bi";

const Search = () => {
  return (
    <div className="flex items-center justify-between">
      <div
        className="py-2 px-5   bg-opacity-70 rounded-md mr-3 cursor-pointer"
        style={{ background: "var(--black-color)" }}
      >
        <BiSearch size="55px" />
      </div>
      <div
        className="py-4 px-3 bg-opacity-15 rounded-md flex items-center cursor-pointer"
        style={{ background: "var(--black-color)" }}
      >
        <BiCart size="40px" />
        <span>Cart is empty</span>
      </div>
    </div>
  );
};

export default Search;
