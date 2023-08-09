import { DataTable, columns } from "../components/drivers-table";

const drivers = [
  {
    driverId: "albon",
    permanentNumber: "23",
    code: "ALB",
    url: "http://en.wikipedia.org/wiki/Alexander_Albon",
    givenName: "Alexander",
    familyName: "Albon",
    dateOfBirth: "1996-03-23",
    nationality: "Thai",
  },
  {
    driverId: "alonso",
    permanentNumber: "14",
    code: "ALO",
    url: "http://en.wikipedia.org/wiki/Fernando_Alonso",
    givenName: "Fernando",
    familyName: "Alonso",
    dateOfBirth: "1981-07-29",
    nationality: "Spanish",
  },
  {
    driverId: "bottas",
    permanentNumber: "77",
    code: "BOT",
    url: "http://en.wikipedia.org/wiki/Valtteri_Bottas",
    givenName: "Valtteri",
    familyName: "Bottas",
    dateOfBirth: "1989-08-28",
    nationality: "Finnish",
  },
];
export const HomePage = () => {
  return <DataTable columns={columns} data={drivers} />;
};
