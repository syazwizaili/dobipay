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
    title: "Transactions",
  },
];

export default function Transactions() {
  return (
    <PageContainer title="Transactions" description="this is Transactions page">
      {/* breadcrumb */}
      <Breadcrumb title="Transactions" items={BCrumb} />
      {/* end breadcrumb */}
      <TablePagination />
    </PageContainer>
  );
}
