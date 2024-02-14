import perfImg from "/public/performance.jpg";
import Hero from "@/components/hero";

export default function PerfPage() {
  return (
    <Hero
      imgData={perfImg}
      imgAlt="welding"
      title="We serve high performance"
    ></Hero>
  );
}
