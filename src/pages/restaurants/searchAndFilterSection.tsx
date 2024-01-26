import { DropDown, SearchInputField } from "@/components";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import {
  SelectGroup,

} from "@/components/ui/select";

const SearchAndFilterSection = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setSeachParams] = useSearchParams({ query: "" })
  const [searchQuery, setsearchQuery] = useState("")
  const [locationSearch, setLoacationSearch] = useState("")


  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setsearchQuery(e.target.value)
  }

  function locationOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    setLoacationSearch(e.target.value)
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setSeachParams((prev) => {
        prev.set("query", searchQuery)
        return prev
      })
    }, 500);
    return () => clearInterval(timer)
  }, [searchQuery, setSeachParams])


  useEffect(() => {
    const timer = setTimeout(() => {
      setSeachParams((prev) => {
        prev.set("location", locationSearch)
        return prev
      })
    }, 500);
    return () => clearInterval(timer)
  }, [locationSearch, setSeachParams])




  return (
    <div className="sm:flex block gap-4">
      <SearchInputField onChange={onChange} placeholder="Search restaurant" searchIcon={true} />
      <div className="grid grid-cols-2 gap-2 mt-3 sm:mt-0">

        <DropDown placeholder="All Prices" >All price children</DropDown>
        <DropDown placeholder="All Locations">
          <SelectGroup className="w-full">
            <SearchInputField onChange={locationOnChange} placeholder="" />
          </SelectGroup>
        </DropDown>
      </div>
    </div>
  );
};

export default SearchAndFilterSection;
