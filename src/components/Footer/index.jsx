import React from "react";
import { Img, Heading } from "./..";

export default function Footer({ ...props }) {
  return (
    <footer {...props}>
      <div className="flex flex-row justify-center w-full mt-[19px] mx-auto max-w-[1114px]">
        <div className="flex flex-row justify-between items-center w-full">
          <div className="flex flex-col items-start justify-start w-[70%] gap-1">
            <div className="flex flex-row justify-between items-start w-full">
              <Img src="images/img_group_642_red_400.svg" alt="image_six" className="h-[50px]" />
              <div className="flex flex-row justify-between items-center w-[47%] mt-[25px]">
                <div className="flex flex-col items-center justify-start w-[29%]">
                  <div className="flex flex-col items-start justify-start w-full">
                    <Heading size="lg" as="h5" className="ml-px !text-white-A700 tracking-[4.00px] ">
                      ABOUT
                    </Heading>
                    <div className="h-0.5 w-[45%] mt-2.5 bg-deep_orange-A100" />
                    <div className="flex flex-col items-start justify-start mt-[38px] gap-[29px]">
                      <Heading as="h6" className="!text-white-A700 tracking-[0.90px] !font-semibold cursor-pointer">
                        About
                      </Heading>
                      <Heading as="h6" className="ml-px !text-white-A700 tracking-[0.90px] !font-semibold cursor-pointer">
                        What we do
                      </Heading>
                      <Heading as="h6" className="ml-px !text-white-A700 tracking-[0.90px] !font-semibold cursor-pointer">
                        Events
                      </Heading>
                      <Heading as="h6" className="ml-px !text-white-A700 tracking-[0.90px] !font-semibold cursor-pointer">
                        Testimonial
                      </Heading>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start w-[38%] gap-[37px]">
                  <div className="flex flex-col items-start justify-start w-full gap-2.5">
                    <Heading size="lg" as="h5" className="!text-white-A700 tracking-[4.00px] cursor-pointer">
                      FOLLOW US
                    </Heading>
                    <div className="h-0.5 w-[34%] bg-deep_orange-A100" />
                  </div>
                  <div className="flex flex-col items-start justify-start gap-[30px]">
                    <Heading as="h6" className="!text-white-A700 tracking-[0.90px] !font-semibold cursor-pointer">
                      Dribbble
                    </Heading>
                    <Heading as="h6" className="!text-white-A700 tracking-[0.90px] !font-semibold cursor-pointer">
                      Instagram
                    </Heading>
                    <Heading as="h6" className="!text-white-A700 tracking-[0.90px] !font-semibold cursor-pointer">
                      Behance
                    </Heading>
                    <Heading as="h6" className="!text-white-A700 tracking-[0.90px] !font-semibold cursor-pointer">
                      Pinterest
                    </Heading>
                  </div>
                </div>
              </div>
            </div>
            <Heading size="xs" as="p" className="!text-white-A700">
               All Rights Reserved @sanjay
            </Heading>
          </div>
          <Img src="images/img_group_710.svg" alt="image_seven" className="h-[311px] mt-[120px]" />
        </div>
      </div>
    </footer>
  );
}
