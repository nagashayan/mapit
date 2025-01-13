"use client";

import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Something went wrong!</h1>
        <p className="text-lg text-gray-600">
          An error occurred while loading this page.
        </p>
        <Button onClick={reset}>Try Again</Button>
      </div>
    </div>
  );
}