import { DropDown, SearchInputField } from "@/components";

const SearchAndFilterSection = () => {
  return (
    <div className="flex gap-4">
      <SearchInputField />
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
