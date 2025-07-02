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
    title: "Machines",
  },
];

export default function Machines() {
  return (
    <PageContainer title="Machines" description="this is Machines page">
      {/* breadcrumb */}
      <Breadcrumb title="Machines" items={BCrumb} />
      {/* end breadcrumb */}
      <DashboardCard title="Machines">
        <Typography>This is a sample2 page</Typography>
      </DashboardCard>
    </PageContainer>
  );
}
