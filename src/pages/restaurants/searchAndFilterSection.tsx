import { DropDown, SearchInputField } from "@/components";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const SearchAndFilterSection = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setSeachParams] = useSearchParams({ query: "" })
  const [searchQuery, setsearchQuery] = useState("")

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setsearchQuery(e.target.value)
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


  return (
    <div className="flex gap-4">
      <SearchInputField onChange={onChange} />
      <div>
        <DropDown placeholder="All Prices" >All price children</DropDown>
      </div>
      <div>
        <DropDown placeholder="All Locations">All location children</DropDown>
      </div>
    </div>
  );
};

export default SearchAndFilterSection;
