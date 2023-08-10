import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useYearStore } from "@/stores/year.store";

const years = Array.from({ length: 20 }, (_, i) => 2023 - i);

export function SelectYear() {
  const { setYear } = useYearStore();

  return (
    <Select onValueChange={(value) => setYear(parseInt(value))}>
      <SelectTrigger>
        <SelectValue placeholder="Select year" />
      </SelectTrigger>
      <SelectContent>
        {years.map((item) => (
          <SelectItem
            key={item}
            value={item.toString()}
            onChange={() => console.log("yoyo")}
          >
            {item}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
