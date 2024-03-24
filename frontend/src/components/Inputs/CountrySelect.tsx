import useCountries from "@/hooks/useCountries";
import Select from "react-select";

export type CountrySelectValue = {
  flag: string;
  label: string;
  latlng: number[];
  region: string;
  value: string;
};

interface CountrySelectProps {
  value?: CountrySelectValue;
  onChange: (value: CountrySelectValue) => void;
}

const CountrySelect: React.FC<CountrySelectProps> = ({ value, onChange }) => {
  const { getAll } = useCountries();

  return (
    <div>
      <Select
        placeholder="Your country"
        isClearable
        options={getAll()}
        value={value}
        onChange={(value) => onChange(value as CountrySelectValue)}
        className="border-black border focus:outline-none"
        formatOptionLabel={(option: any) => (
          <div
            className="
          flex flex-row items-center gap-3  rounded-none "
          >
            <div>{option.flag}</div>

            <div>
              {option.label},
              <span className="text-neutral-500 ml-1">{option.region}</span>
            </div>
          </div>
        )}
        classNames={{
          control: () => "p-1  border-2 rounded-none border-blackColor",
          input: () => "text-md",
          option: () => "text-md",
        }}
        theme={(theme) => ({
          ...theme,
          borderRadius: 0,
          border: "2px solid #000",
          colors: {
            ...theme.colors,
            primary: "black",
            primary25: "#ffe4e6",
          },
        })}
      />
    </div>
  );
};

export default CountrySelect;
