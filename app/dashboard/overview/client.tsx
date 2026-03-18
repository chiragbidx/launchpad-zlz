"use client";

import { BarChart3 } from "lucide-react";

export default function OverviewClient() {
  return (
    <div className="max-w-2xl mx-auto py-16 text-center">
      <div className="flex justify-center mb-8">
        <BarChart3 className="size-12 text-primary" />
      </div>
      <h1 className="text-2xl font-semibold mb-2">Overview</h1>
      <p className="mb-4 text-muted-foreground">
        View recent campaign performance and engagement metrics.
      </p>
      {/* Analytics widgets or charts will be added in future milestones */}
    </div>
  );
}