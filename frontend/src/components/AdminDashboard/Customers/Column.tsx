import { ColumnDef } from "@tanstack/react-table";

export type ProductColumn = {
  id: string;
  label: string;
  createdAt: string;
};

export const columns: ColumnDef<ProductColumn>[] = [
  {
    accessorKey: "_id",
    header: "Id",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "email",
    header: "E-Mail",
  },
  {
    accessorKey: "phone",
    header: "Phone number",
  },
  {
    accessorKey: "birthdate",
    header: "Birthday",
  },
  {
    accessorKey: "createdAt",
    header: "Created At",
  },
];
