import { Card, CardBody } from "@chakra-ui/react";
import React from "react";
import ImageComponent from "../ImageComponent";

export default function Education() {
  return (
    <>
    <div className=" md:flex gap-2 px-2">
    <Card className="md:w-4/6 my-2">
        <CardBody className="flex  gap-2">
          <div className="h-42  lg:h-52 w-72">
            <ImageComponent photo="/assets/images/ambedkar.jpeg" />
          </div>
          <div className="w-full">
            <p className="md:text-2xl">
              Ambedkar Institute of Advanced Communication Technologies and
              Research
            </p>
            <p className="md:text-xl">B.TECH in ECE</p>
            <p className="md:text-lg">2019-2022</p>
          </div>
        </CardBody>
      </Card>
      <Card className=" md:w-4/6 mx-auto  my-2">
        <CardBody className="flex  gap-2">
          <div className="h-42  lg:h-52 w-72">
            <ImageComponent photo="/assets/images/pusa.jpg" />
          </div>
          <div className="w-full">
            <p className="md:text-2xl">
             Pusa Institute Of Technology
            </p>
            <p className="md:text-xl">Diploma in ECE</p>
            <p className="md:text-lg">2016-2019</p>
          </div>
        </CardBody>
      </Card>
    </div>
    
    </>
  );
}
