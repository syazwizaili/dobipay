"use client";
import Typography from "@mui/material/Typography";
import PageContainer from "@/app/components/container/PageContainer";
import DashboardCard from "@/app/components/shared/DashboardCard";
import Breadcrumb from "../layout/shared/breadcrumb/Breadcrumb";
import TablePagination from "@/app/components/table/TablePagination";

const BCrumb = [
  {
    to: "/",
    title: "Home",
  },
  {
    title: "Customers",
  },
];

export default function Customers() {
  return (
    <PageContainer title="Customers" description="this is Customers page">
      {/* breadcrumb */}
      <Breadcrumb title="Customers" items={BCrumb} />
      {/* end breadcrumb */}
      <TablePagination />
    </PageContainer>
  );
}
