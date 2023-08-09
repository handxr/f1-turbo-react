import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";

export type Driver = {
  driverId: string;
  permanentNumber: string;
  code: string;
  url: string;
  givenName: string;
  familyName: string;
  dateOfBirth: string;
  nationality: string;
};

export const columns: ColumnDef<Driver>[] = [
  {
    accessorKey: "permanentNumber",
    header: "Number",
  },
  {
    accessorKey: "code",
    header: "Code",
  },
  {
    accessorKey: "givenName",
    header: "Given Name",
  },
  {
    accessorKey: "familyName",
    header: "Family Name",
  },
  {
    accessorKey: "dateOfBirth",
    header: () => <div className="text-right">Date of Birth</div>,
    cell: ({ row }) => {
      const formattedDate = format(
        new Date(row.getValue("dateOfBirth")),
        "dd/MM/yyyy"
      );

      return <div className="text-right">{formattedDate}</div>;
    },
  },
];
