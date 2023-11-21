"use client";

import Link from "next/link";

export default function Error() {
  return (
    <div className="fixed inset-0 w-full flex justify-center">
      <section className="h-full max-w-4/5 flex items-center px-4">
        <div className="flex flex-col items-start">
          <div className="flex h-8 items-center">
            <h1 className="text-6xl font-bold">404</h1>
            <p className="text-2xl">Page not found.</p>
            <Link href="/">
              <span className="text-xl underline">Go home</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
