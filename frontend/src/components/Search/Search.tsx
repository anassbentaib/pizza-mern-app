import { BiCart, BiSearch } from "react-icons/bi";

const Search = () => {
  return (
    <div className="flex items-center justify-between">
      <div
        className="py-4 px-5   bg-opacity-70 rounded-md mr-2 cursor-pointer"
        style={{ background: "var(--black-color)" }}
      >
        <BiSearch className="text-2xl sm:text-lg md:text-2xl 2xl:text-3xl" />
      </div>
      <div
        className="py-4 px-3 bg-opacity-15 rounded-md flex items-center cursor-pointer"
        style={{ background: "var(--black-color)" }}
      >
        <BiCart className="text-2xl sm:text-lg md:text-2xl 2xl:text-3xl mr-1" />
        <span className="text-[11px] xl:text-[14px]">Cart is empty</span>
      </div>
    </div>
  );
};

export default Search;
