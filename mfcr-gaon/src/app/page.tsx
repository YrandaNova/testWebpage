"use client";
import Image from "next/image";
import StandarHeader from "../components/navbar";
import Paralax from "@/components/paralax";

import "/home/yranda/Documents/tecnicalDebt/Gaon-Front-Test/mfcr-gaon/src/styles/globals.css"; // Replace "../path/to/globals.css" with the actual path to your globals.css file
import ImageAnimation from "@/components/imageAnimation";
import Footer from "@/components/footer";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const onClick = () => {
    router.push("/services");
  };
  return (
    <main style={{ backgroundColor: "#5e4df4" }}>
      <div>
        <Paralax />
        <div className="about  mt-20 flex">
          <div className="w-1/2 mx-5 mt-10 ">
            <h1 className="text-justify font-thin mb-10  ml-10 mt-10 ">
              Lorem ipsum
            </h1>
            <p className="text-justify text-xl ml-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              eius dolores doloremque harum architecto. Cum quidem asperiores,
              doloribus similique amet libero sed soluta esse eos temporibus nam
              ex molestiae numquam? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Numquam eius dolores doloremque harum
              architecto. Cum quidem asperiores, doloribus similique amet libero
              sed soluta esse eos temporibus nam ex molestiae numquam? Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Numquam eius
              dolores doloremque harum architecto. Cum quidem asperiores,
              doloribus similique amet libero sed soluta esse eos temporibus nam
              ex molestiae numquam? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Numquam eius dolores doloremque harum
              architecto. Cum quidem asperiores, doloribus similique amet libero
              sed soluta esse eos temporibus nam ex molestiae numquam? dolores
              doloremque harum architecto. sed soluta esse eos temporibus nam ex
              molestiae numquam? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Numquam eius dolores doloremque harum
              architecto. Cum quidem asperiores, doloribus similique amet libero
              sed soluta esse eos temporibus nam ex molestiae numquam?
            </p>
            <div className="flex justify-center">
              <button
                onClick={onClick}
                className="bg-green-200  text-blue-500 w-[200px] mt-10  p-2 rounded-lg hover:text-violet-500 hover:bg-green-400 "
              >
                Learn More
              </button>
            </div>
          </div>
          <div className="w-1/2 mt-20 mx-10">
            <ImageAnimation />
          </div>
        </div>
        <Footer />
      </div>
    </main>
  );
}
