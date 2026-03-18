"use client";

import { DashboardContent } from "@/components/dashboard/dashboard-content";

// Purpose: Client UI for /dashboard.

type ClientProps = {
  greeting: string;
  firstName: string;
};

export default function Client({ greeting, firstName }: ClientProps) {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-semibold tracking-tight">Welcome to MailForge</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Get started by creating your first email campaign.
        </p>
      </div>
      <DashboardContent
        greeting={greeting}
        firstName={firstName}
      />
    </div>
  );
}