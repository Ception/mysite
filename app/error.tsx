import Link from "next/link";

export default function ErrorPage() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen space-y-4">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="text-2xl">Page not found.</p>
      <Link href="/">
        <a className="text-xl underline">Go home</a>
      </Link>
    </div>
  );
}
