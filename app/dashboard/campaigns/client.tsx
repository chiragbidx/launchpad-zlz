"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function CampaignsClient() {
  // Placeholder: No campaigns yet (real data will be fetched from DB in future)
  return (
    <div className="max-w-2xl mx-auto py-16 text-center">
      <h1 className="text-2xl font-semibold mb-2">Your Campaigns</h1>
      <p className="mb-8 text-muted-foreground">You haven’t created any campaigns yet.</p>
      <Button asChild size="lg" className="gap-2">
        <Link href="/dashboard/campaigns/new"><Plus className="size-4" /> New Campaign</Link>
      </Button>
    </div>
  );
}