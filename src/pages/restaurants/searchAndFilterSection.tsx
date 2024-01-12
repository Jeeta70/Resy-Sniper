import { DropDown, SearchInputField } from "@/components";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const SearchAndFilterSection = () => {
  const [searchParams, setSeachParams] = useSearchParams({ query: "" })
  const [searchQuery, setsearchQuery] = useState("")

  
  console.log("", searchParams);

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setsearchQuery(e.target.value)
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setSeachParams((prev) => {
        prev.set("query", searchQuery)
        return prev
      })
    }, 1000);
    return () => clearInterval(timer)
  }, [searchQuery])


  return (
    <div className="flex gap-4">
      <SearchInputField onChange={onChange} />
      <div>
        <DropDown placeholder="All Prices" />
      </div>
      <div>
        <DropDown placeholder="All Locations" />
      </div>
    </div>
  );
};

export default SearchAndFilterSection;
