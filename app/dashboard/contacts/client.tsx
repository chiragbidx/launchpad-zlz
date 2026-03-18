"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Users } from "lucide-react";

export default function ContactsClient() {
  return (
    <div className="max-w-2xl mx-auto py-16 text-center">
      <h1 className="text-2xl font-semibold mb-2">Your Contacts</h1>
      <p className="mb-8 text-muted-foreground">No contacts found.</p>
      <Button asChild size="lg" className="gap-2">
        <Link href="#"><Users className="size-4" /> Add Contacts</Link>
      </Button>
    </div>
  );
}