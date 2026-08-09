import * as React from "react"
import { Search } from "lucide-react"

import { Input, type InputProps } from "@/components/shared/forms/Input"

export interface SearchInputProps extends Omit<InputProps, "startIcon" | "type"> { }

const SearchInput = React.forwardRef<HTMLInputElement, SearchInputProps>((props, ref) => {
  return <Input ref={ref} type="search" startIcon={<Search />} placeholder="Search..." {...props} />
})
SearchInput.displayName = "SearchInput"

export { SearchInput }
