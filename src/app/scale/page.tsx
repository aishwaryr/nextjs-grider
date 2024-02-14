import scaleImg from "/public/scale.jpg";
import Hero from "@/components/hero";

export default function ScalePage() {
  return (
    <Hero
      imgData={scaleImg}
      imgAlt="cranes"
      title="We provide great scalability"
    ></Hero>
  );
}
