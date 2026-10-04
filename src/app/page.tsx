import Hero from "@/components/home/Hero";
import WhatWeDo from "@/components/home/WhatWeDo";
import WhoWeAre from "@/components/home/WhoWeAre";
import GalleryVideos from "@/components/home/GalleryVideos";
import Socials from "@/components/home/Socials";

export default function Home() {
  return (
    <div>
      <Hero />
      <WhoWeAre />
      <WhatWeDo />
      <GalleryVideos />
      <Socials />
    </div>
  );
}