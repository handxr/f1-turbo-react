import { Table } from "@tanstack/react-table";
import { Input } from "../ui/input";

type DataTableSearchInputProps<TData> = {
  table: Table<TData>;
  placeholder: string;
  value: string;
};

export function DataTableSearchInput<TData>({
  table,
  placeholder,
  value,
}: DataTableSearchInputProps<TData>) {
  return (
    <Input
      placeholder={placeholder}
      value={(table.getColumn(value)?.getFilterValue() as string) ?? ""}
      onChange={(event) =>
        table.getColumn(value)?.setFilterValue(event.target.value)
      }
      className="max-w-sm"
    />
  );
}
