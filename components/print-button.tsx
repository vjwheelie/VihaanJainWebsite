"use client";

export function PrintButton() {
  return (
    <button type="button" onClick={() => window.print()} className="u text-mid print:hidden">
      Save as PDF
    </button>
  );
}
