import { ColumnDef } from "@tanstack/react-table";

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
];
