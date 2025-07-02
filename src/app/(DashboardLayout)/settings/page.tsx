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
    title: "Settings",
  },
];

export default function Settings() {
  return (
    <PageContainer title="Settings" description="this is Settings page">
      {/* breadcrumb */}
      <Breadcrumb title="Settings" items={BCrumb} />
      {/* end breadcrumb */}
      <DashboardCard title="Settings">
        <Typography>This is a sample2 page</Typography>
      </DashboardCard>
    </PageContainer>
  );
}
