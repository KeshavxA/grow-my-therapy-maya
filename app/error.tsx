"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[50vh] flex flex-col items-center justify-center p-6 text-center">
      <div className="w-16 h-16 bg-[var(--color-sage)]/10 rounded-full flex items-center justify-center mb-6">
        <svg className="w-8 h-8 text-[var(--color-sage)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      </div>
      <h2 className="font-serif text-3xl text-[var(--text-main)] mb-4">Something went wrong!</h2>
      <p className="font-sans text-[var(--text-main)] opacity-70 mb-8 max-w-md">
        We apologize for the inconvenience. An unexpected error has occurred.
      </p>
      <button
        onClick={() => reset()}
        className="px-8 py-3 bg-[var(--color-sage)] text-white text-sm font-bold uppercase tracking-widest rounded-full hover:bg-opacity-90 transition-all"
      >
        Try again
      </button>
    </div>
  );
}
