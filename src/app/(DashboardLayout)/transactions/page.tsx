"use client";
import Typography from "@mui/material/Typography";
import PageContainer from "@/app/components/container/PageContainer";
import DashboardCard from "@/app/components/shared/DashboardCard";
import Breadcrumb from "../layout/shared/breadcrumb/Breadcrumb";

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
      <DashboardCard title="Transactions">
        <Typography>This is a sample2 page</Typography>
      </DashboardCard>
    </PageContainer>
  );
}
