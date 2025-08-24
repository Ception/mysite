import HomePage from "./components/HomePage";

export const dynamic = "force-static";
export const revalidate = 86400;

export default function Home() {
  return <HomePage />;
}
