import dynamic from "next/dynamic";

const Landing = dynamic(() => import("./landing/Landing"), { ssr: false });

export default function HomePage() {
  return <Landing />;
}

