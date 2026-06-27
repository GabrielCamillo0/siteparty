"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { captureAttributionFromSearch } from "@/lib/utm";

export function AttributionCapture() {
  const searchParams = useSearchParams();

  useEffect(() => {
    captureAttributionFromSearch(searchParams.toString());
  }, [searchParams]);

  return null;
}
