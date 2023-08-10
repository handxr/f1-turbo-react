import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useYearStore } from "@/stores/year.store";
import { ScrollArea } from "./ui/scroll-area";

const years = Array.from({ length: 20 }, (_, i) => 2023 - i);

export function SelectYear() {
  const { setYear, year } = useYearStore();

  return (
    <Select
      onValueChange={(value) => setYear(parseInt(value))}
      value={year.toString()}
    >
      <SelectTrigger>
        <SelectValue placeholder="Select year" />
      </SelectTrigger>

      <SelectContent>
        <ScrollArea className="h-[300px]">
          {years.map((item) => (
            <SelectItem
              key={item}
              value={item.toString()}
              onChange={() => console.log("yoyo")}
            >
              {item}
            </SelectItem>
          ))}
        </ScrollArea>
      </SelectContent>
    </Select>
  );
}
