"use client";
import { Button } from "@heroui/react";
import React from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { toast } from "react-toastify";

const MoreGuides = () => 
{
  const handleMoreGuides = () => 
    {
    toast.info("More guides will be developed later.");
 };


  return (
    <Button onClick={handleMoreGuides} variant="outline">
      More Guides <FaArrowAltCircleRight />
    </Button>
  );
};

export default MoreGuides;
