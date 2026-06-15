import React from 'react';

export default function PageLoader() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="text-center">
        <div className="mx-auto h-14 w-14 animate-spin rounded-full border-4 border-primary/15 border-t-primary" />
        <p className="mt-4 text-sm font-semibold uppercase tracking-[0.24em] text-muted-foreground">
          Loading ATROS
        </p>
      </div>
    </div>
  );
}
