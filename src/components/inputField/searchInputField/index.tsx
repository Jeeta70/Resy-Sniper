import { Input } from '@/components/ui/input';

interface Props {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder:string
  searchIcon?:boolean
}

const SearchInputField = ({ onChange, placeholder, searchIcon=false }: Props) => {
  return (
    <div className="relative">
      {searchIcon && <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        <svg
          className="w-4 h-4 text-gray-500 dark:text-gray-400"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
      </div>}
      <Input
        onChange={onChange}
        type="search"
        id="default-search"
        className="block  p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-full"
        placeholder={placeholder}
        required
      />
    </div>
  );
}

export default SearchInputField;