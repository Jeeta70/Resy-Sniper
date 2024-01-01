import { TCountryCode, countries, getEmojiFlag } from "countries-list";
import { SelectGroup, SelectItem } from "../ui/select";

const Index = () => {
  interface CountryDetails {
    flag: string;
    phoneCode: string;
  }

  
  const getCountryDetails = () => {
    const data = [];
    for (const [key, value] of Object.entries(countries)) {
      const countryDetail: CountryDetails = {
        flag: getEmojiFlag(key as TCountryCode),
        phoneCode: `+ ${value.phone[0]}`,
      };

      data.push(countryDetail);
    }
    //filter the array of dublicate phone codes
    return [...new Map(data.map((item) => [item["phoneCode"], item])).values()];
  };

  

  return (
    <SelectGroup>
      {getCountryDetails().map((country, index) => (
        <SelectItem value={country.phoneCode.replace(" ","")} key={index}>
          {country.flag}{" "}
          {country.phoneCode}
        </SelectItem>
      ))}
    </SelectGroup>
  );
};

export default Index;
