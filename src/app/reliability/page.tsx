import relImg from "/public/reliability.jpg";
import Hero from "@/components/hero";

export default function RelPage() {
  return (
    <Hero
      imgData={relImg}
      imgAlt="mask welding"
      title="We are very very reliable"
    ></Hero>
  );
}
