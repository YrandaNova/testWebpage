"use client";
import Carousel from "@/components/carousel";
import ContactForm from "@/components/contactForm";
import DragAndDrop from "@/components/dragAndDrop";
import React from "react";
const images = [
  { src: "/image_1.jpg", alt: "First Image" },
  { src: "/image_2.jpg", alt: "Second Image" },
  { src: "/image_3.png", alt: "Third Image" },
  { src: "/imagen_4.jpg", alt: "forth Image" },
];
const Services: React.FC = () => {
  return (
    <div className="bg-violet-300  ">
      <div className="text-black flex justify-center items-center ">
        <div className="w-1/2 flex flex-col">
          <div className="">
            <h1 className="text-[90px] text-center  mb-10 font-light text-green-200">
              Our Services
            </h1>
            <div className="h-[400px] w-[700px] ml-24 ">
              <Carousel images={images} />
            </div>
          </div>
        </div>

        <div className="w-1/2">
          <div>
            <h1 className="text-[80px] mt-20 text-center  font-light text-green-200">
              Contact Us
            </h1>
            <div className="mr-10">
              <ContactForm />
            </div>
          </div>
          <div>
            <p className="mt-10 text-violet-900">
              lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              eius dolores doloremque harum architecto. Cum quidem asperiores,
              doloribus similique amet libero sed soluta esse eos temporibus nam
              ex molestiae numquam? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Numquam eius dolores doloremque harum
              architecto. Cum quidem asperiores, doloribus similique amet libero
              sed soluta esse eos temporibus nam ex molestiae numquam? Lorem
            </p>
            <div className="mr-10"></div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        {" "}
        <h1 className="text-center mt-20 text-[80px] font-light hover:text-yellow-200">
          ★ Look at this cool component ★
        </h1>
        <div className=" items-center">
          <DragAndDrop />
        </div>
      </div>
    </div>
  );
};

export default Services;
