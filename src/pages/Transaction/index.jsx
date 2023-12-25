import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, List, Slider, Text } from "components";
import Sidebar11 from "components/Sidebar11";

import { CloseSVG } from "../../assets/images";

const TransactionPage = () => {
  const navigate = useNavigate();

  const [groupeightvalue, setGroupeightvalue] = React.useState("");
  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);
  const sliderRef1 = React.useRef(null);
  const [sliderState1, setsliderState1] = React.useState(0);

  return (
    <>
      <div className="bg-gray-100 flex sm:flex-col md:flex-col flex-row font-inter sm:gap-5 md:gap-5 items-start mx-auto w-full">
        <Sidebar11 className="!sticky !w-[250px] flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]" />
        <div className="flex flex-1 flex-col gap-[25px] items-center justify-start md:px-5 w-full">
          <div className="bg-white-A700 border-b border-gray-300 border-solid flex md:flex-col flex-row md:gap-5 items-center justify-start p-5 w-full">
            <Text
              className="ml-10 md:ml-[0] sm:text-2xl md:text-[26px] text-[28px] text-gray-900"
              size="txtInterSemiBold28"
            >
              Transactions
            </Text>
            <Input
              name="GroupEight"
              placeholder="Search for something"
              value={groupeightvalue}
              onChange={(e) => setGroupeightvalue(e)}
              className="!placeholder:text-bluegray-400 !text-bluegray-400 leading-[normal] p-0 text-[15px] text-left w-full"
              wrapClassName="flex md:flex-1 md:ml-[0] ml-[424px] md:mt-0 my-[25px] rounded-[25px] w-[23%] md:w-full"
              prefix={
                <Img
                  className="cursor-pointer h-5 ml-[25px] mr-[15px] my-[15px]"
                  src="images/img_search.svg"
                  alt="search"
                />
              }
              suffix={
                <CloseSVG
                  fillColor="#888ea2"
                  className="cursor-pointer h-5 my-auto"
                  onClick={() => setGroupeightvalue("")}
                  style={{
                    visibility:
                      groupeightvalue?.length <= 0 ? "hidden" : "visible",
                  }}
                  height={20}
                  width={20}
                  viewBox="0 0 20 20"
                />
              }
              color="gray_101"
            ></Input>
            <Button
              className="common-pointer flex h-[50px] items-center justify-center md:ml-[0] ml-[30px] md:mt-0 my-[25px] w-[50px]"
              onClick={() => navigate("/settingpagepreferences")}
              shape="circle"
              color="gray_102"
              size="sm"
              variant="fill"
            >
              <Img
                className="h-[25px]"
                src="images/img_settings_50X50.svg"
                alt="settings One"
              />
            </Button>
            <Button
              className="flex h-[50px] items-center justify-center md:ml-[0] ml-[30px] md:mt-0 my-[25px] w-[50px]"
              shape="circle"
              color="gray_102"
              size="sm"
              variant="fill"
            >
              <Img
                className="h-[25px]"
                src="images/img_notification.svg"
                alt="notification"
              />
            </Button>
            <Slider
              autoPlay
              autoPlayInterval={2000}
              activeIndex={sliderState}
              responsive={{
                0: { items: 1 },
                550: { items: 1 },
                1050: { items: 1 },
              }}
              onSlideChanged={(e) => {
                setsliderState(e?.item);
              }}
              ref={sliderRef}
              className="h-[60px] md:ml-[0] ml-[35px] mr-10 md:mt-0 my-5 w-[60px]"
              items={[...Array(3)].map(() => (
                <React.Fragment key={Math.random()}>
                  <Img
                    className="common-pointer h-[60px] md:h-auto mx-2.5 rounded-[50%]"
                    src="images/img_ellipse1.png"
                    alt="EllipseOne"
                    onClick={() => navigate("/settingeditprofile")}
                  />
                </React.Fragment>
              ))}
            />
          </div>
          <div className="flex flex-col gap-6 items-center justify-start ml-10 md:ml-[0] w-[94%] md:w-full">
            <div className="flex md:flex-col flex-row gap-[30px] items-center justify-between w-full">
              <div className="flex md:flex-1 flex-col items-center justify-start w-[66%] md:w-full">
                <div className="flex flex-col gap-5 items-center justify-start w-full">
                  <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
                    <Text
                      className="text-[22px] text-bluegray-900 sm:text-lg md:text-xl"
                      size="txtInterSemiBold22"
                    >
                      My Cards
                    </Text>
                    <Button className="bg-transparent cursor-pointer font-semibold leading-[normal] min-w-[93px] text-[17px] text-bluegray-900 text-center">
                      + Add Card
                    </Button>
                  </div>
                  <div className="flex md:flex-col flex-row gap-[30px] items-center justify-between w-full">
                    <div className="bg-indigo-600 flex md:flex-1 flex-col gap-[33px] items-center justify-end pt-6 rounded-[25px] w-[48%] md:w-full">
                      <div className="flex flex-col gap-7 items-start justify-start mt-6 w-[87%] md:w-full">
                        <div className="flex flex-row items-start justify-between w-full">
                          <div className="flex flex-col items-start justify-start">
                            <Text
                              className="text-white-A700 text-xs"
                              size="txtInterRegular12WhiteA700"
                            >
                              Balance
                            </Text>
                            <Text
                              className="mt-1 text-white-A700 text-xl"
                              size="txtInterRegular20"
                            >
                              $5,756
                            </Text>
                          </div>
                          <Img
                            className="h-[34px] md:h-auto object-cover w-[34px]"
                            src="images/img_chipcard.png"
                            alt="ChipCard"
                          />
                        </div>
                        <div className="flex flex-row gap-[59px] items-center justify-start ml-0.5 md:ml-[0] w-[76%] md:w-full">
                          <div className="flex flex-col items-start justify-start">
                            <Text
                              className="text-white-A700_b2 text-xs"
                              size="txtInterRegular12"
                            >
                              CARD HOLDER
                            </Text>
                            <Text
                              className="mt-1 text-[15px] text-white-A700"
                              size="txtInterRegular15"
                            >
                              Eddy Cusuma
                            </Text>
                          </div>
                          <div className="flex flex-col items-start justify-start">
                            <Text
                              className="text-white-A700_b2 text-xs"
                              size="txtInterRegular12"
                            >
                              VALID THRU
                            </Text>
                            <Text
                              className="mt-1 text-[15px] text-white-A700"
                              size="txtInterRegular15"
                            >
                              12/22
                            </Text>
                          </div>
                        </div>
                      </div>
                      <Input
                        name="Group319"
                        placeholder="3778 **** **** 1234"
                        className="leading-[normal] md:text-xl p-0 placeholder:text-white-A700 sm:text-lg text-[22px] text-left w-full"
                        wrapClassName="flex rounded-bl-[25px] rounded-br-[25px] w-full"
                        suffix={
                          <Img
                            className="ml-[35px] mr-6 my-5"
                            src="images/img_contrast.svg"
                            alt="contrast"
                          />
                        }
                        size="sm"
                        variant="gradient"
                        color="white_A700_26_white_A700_26"
                      ></Input>
                    </div>
                    <div className="bg-indigo-500 flex md:flex-1 flex-col gap-[33px] items-center justify-end pt-6 rounded-[25px] w-[48%] md:w-full">
                      <div className="flex flex-col gap-7 items-start justify-start mt-6 w-[87%] md:w-full">
                        <div className="flex flex-row items-start justify-between w-full">
                          <div className="flex flex-col items-start justify-start">
                            <Text
                              className="text-white-A700 text-xs"
                              size="txtInterRegular12WhiteA700"
                            >
                              Balance
                            </Text>
                            <Text
                              className="mt-1 text-white-A700 text-xl"
                              size="txtInterRegular20"
                            >
                              $5,756
                            </Text>
                          </div>
                          <Img
                            className="h-[34px] md:h-auto object-cover w-[34px]"
                            src="images/img_chipcard.png"
                            alt="ChipCard One"
                          />
                        </div>
                        <div className="flex flex-row gap-[59px] items-center justify-start ml-0.5 md:ml-[0] w-[76%] md:w-full">
                          <div className="flex flex-col items-start justify-start">
                            <Text
                              className="text-white-A700_b2 text-xs"
                              size="txtInterRegular12"
                            >
                              CARD HOLDER
                            </Text>
                            <Text
                              className="mt-1 text-[15px] text-white-A700"
                              size="txtInterRegular15"
                            >
                              Eddy Cusuma
                            </Text>
                          </div>
                          <div className="flex flex-col items-start justify-start">
                            <Text
                              className="text-white-A700_b2 text-xs"
                              size="txtInterRegular12"
                            >
                              VALID THRU
                            </Text>
                            <Text
                              className="mt-1 text-[15px] text-white-A700"
                              size="txtInterRegular15"
                            >
                              12/22
                            </Text>
                          </div>
                        </div>
                      </div>
                      <Input
                        name="Group319 One"
                        placeholder="3778 **** **** 1234"
                        className="leading-[normal] md:text-xl p-0 placeholder:text-white-A700 sm:text-lg text-[22px] text-left w-full"
                        wrapClassName="flex rounded-bl-[25px] rounded-br-[25px] w-full"
                        suffix={
                          <Img
                            className="ml-[35px] mr-6 my-5"
                            src="images/img_contrast.svg"
                            alt="contrast"
                          />
                        }
                        size="sm"
                        variant="gradient"
                        color="white_A700_26_white_A700_26"
                      ></Input>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-1 flex-col gap-5 items-start justify-start w-[32%] md:w-full">
                <Text
                  className="text-[22px] text-bluegray-900 sm:text-lg md:text-xl"
                  size="txtInterSemiBold22"
                >
                  My Expense
                </Text>
                <div className="bg-white-A700 flex flex-col items-center justify-start p-6 sm:px-5 rounded-[25px] w-full">
                  <div className="flex flex-row items-start justify-start ml-6 md:ml-[0] mr-[29px] my-6 rounded-[10px] w-[99%] md:w-full">
                    <div className="flex flex-col gap-[9px] items-center justify-start mt-[69px] rounded-[10px] w-[13%]">
                      <div className="bg-gray-102 h-[93px] rounded-[10px] w-full"></div>
                      <Text
                        className="ml-1.5 md:ml-[0] text-[13px] text-bluegray-400"
                        size="txtInterRegular13"
                      >
                        Aug
                      </Text>
                    </div>
                    <div className="flex flex-col gap-[9px] items-center justify-start ml-[15px] mt-5 rounded-[10px] w-[13%]">
                      <div className="bg-gray-102 h-[142px] rounded-[10px] w-full"></div>
                      <Text
                        className="md:ml-[0] ml-[7px] text-[13px] text-bluegray-400"
                        size="txtInterRegular13"
                      >
                        Sep
                      </Text>
                    </div>
                    <div className="flex flex-col gap-[9px] items-center justify-start ml-[15px] mt-[66px] rounded-[10px] w-[13%]">
                      <div className="bg-gray-102 h-24 rounded-[10px] w-full"></div>
                      <Text
                        className="ml-2 md:ml-[0] text-[13px] text-bluegray-400"
                        size="txtInterRegular13"
                      >
                        Oct
                      </Text>
                    </div>
                    <div className="flex flex-col gap-[9px] items-center justify-start ml-[15px] mt-[113px] rounded-[10px] w-[13%]">
                      <div className="bg-gray-102 h-[49px] rounded-[10px] w-full"></div>
                      <Text
                        className="ml-1.5 md:ml-[0] text-[13px] text-bluegray-400"
                        size="txtInterRegular13"
                      >
                        Nov
                      </Text>
                    </div>
                    <div className="flex flex-col gap-2 items-center justify-start ml-1.5 rounded-[10px] w-[19%]">
                      <Text
                        className="text-bluegray-800 text-sm"
                        size="txtInterMedium14"
                      >
                        $12,500
                      </Text>
                      <div className="bg-indigo-600 h-[137px] rounded-[10px] w-[68%]"></div>
                      <Text
                        className="md:ml-[0] ml-[15px] text-[13px] text-bluegray-400"
                        size="txtInterRegular13"
                      >
                        Dec
                      </Text>
                    </div>
                    <div className="flex flex-col gap-[9px] items-center justify-start ml-1.5 mt-[74px] rounded-[10px] w-[13%]">
                      <div className="bg-gray-102 h-[88px] rounded-[10px] w-full"></div>
                      <Text
                        className="ml-2 md:ml-[0] text-[13px] text-bluegray-400"
                        size="txtInterRegular13"
                      >
                        Jan
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-6 items-end justify-start w-full">
              <div className="flex flex-col gap-[27px] items-start justify-start w-full">
                <Text
                  className="text-[22px] text-bluegray-900 sm:text-lg md:text-xl"
                  size="txtInterSemiBold22"
                >
                  Recent Transactions
                </Text>
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-[38%] md:w-full">
                    <div className="flex flex-col gap-2 items-center justify-start w-[35%] sm:w-full">
                      <Text
                        className="md:ml-[0] ml-[11px] text-base text-blue-A700"
                        size="txtInterMedium16BlueA700"
                      >
                        All Transactions
                      </Text>
                      <Line className="bg-blue-A700 h-[3px] rounded-tl-[10px] rounded-tr-[10px] w-full" />
                    </div>
                    <Text
                      className="sm:ml-[0] ml-[71px] text-base text-bluegray-400"
                      size="txtInterMedium16Bluegray400"
                    >
                      Income
                    </Text>
                    <Text
                      className="sm:ml-[0] ml-[82px] text-base text-bluegray-400"
                      size="txtInterMedium16Bluegray400"
                    >
                      Expense
                    </Text>
                  </div>
                  <Line className="bg-gray-300 h-px w-full" />
                </div>
              </div>
              <Slider
                activeIndex={sliderState1}
                responsive={{
                  0: { items: 1 },
                  550: { items: 2 },
                  1050: { items: 3 },
                }}
                onSlideChanged={(e) => {
                  setsliderState1(e?.item);
                }}
                activeSlideCSS="scale-[1.00]"
                ref={sliderRef1}
                className="w-full"
                items={[...Array(9)].map(() => (
                  <React.Fragment key={Math.random()}>
                    <div className="bg-white-A700 flex flex-col gap-[15px] items-center justify-end mx-2.5 p-[17px] rounded-[25px]">
                      <div className="flex flex-col gap-[11px] items-center justify-start mt-[22px] w-[98%] md:w-full">
                        <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[97%] md:w-full">
                          <Text
                            className="text-base text-bluegray-400"
                            size="txtInterMedium16Bluegray400"
                          >
                            Description
                          </Text>
                          <Text
                            className="md:ml-[0] ml-[143px] text-base text-bluegray-400"
                            size="txtInterMedium16Bluegray400"
                          >
                            Transaction ID
                          </Text>
                          <Text
                            className="md:ml-[0] ml-[43px] text-base text-bluegray-400"
                            size="txtInterMedium16Bluegray400"
                          >
                            Type
                          </Text>
                          <Text
                            className="md:ml-[0] ml-[87px] text-base text-bluegray-400"
                            size="txtInterMedium16Bluegray400"
                          >
                            Card
                          </Text>
                          <Text
                            className="md:ml-[0] ml-[97px] text-base text-bluegray-400"
                            size="txtInterMedium16Bluegray400"
                          >
                            Date
                          </Text>
                          <Text
                            className="md:ml-[0] ml-[162px] text-base text-bluegray-400"
                            size="txtInterMedium16Bluegray400"
                          >
                            Amount
                          </Text>
                          <Text
                            className="md:ml-[0] ml-[49px] text-base text-bluegray-400"
                            size="txtInterMedium16Bluegray400"
                          >
                            Receipt
                          </Text>
                        </div>
                        <Line className="bg-gray-300 h-px w-full" />
                      </div>
                      <List
                        className="flex flex-col gap-[15px] items-center mb-[17px] w-[98%]"
                        orientation="vertical"
                      >
                        <div className="flex flex-col gap-[15px] items-center justify-start w-full">
                          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                            <Button
                              className="flex h-[30px] items-center justify-center rounded-[50%] w-[30px]"
                              shape="circle"
                              color="red_700"
                              size="xs"
                              variant="outline"
                            >
                              <Img src="images/img_arrow.svg" alt="Arrow" />
                            </Button>
                            <Text
                              className="ml-3.5 md:ml-[0] text-base text-bluegray-900"
                              size="txtInterRegular16Bluegray900"
                            >
                              Spotify Subscription
                            </Text>
                            <Text
                              className="md:ml-[0] ml-[33px] text-base text-bluegray-900"
                              size="txtInterRegular16Bluegray900"
                            >
                              #12548796
                            </Text>
                            <Text
                              className="md:ml-[0] ml-[67px] text-base text-bluegray-900"
                              size="txtInterRegular16Bluegray900"
                            >
                              Shopping
                            </Text>
                            <Text
                              className="md:ml-[0] ml-[53px] text-base text-bluegray-900"
                              size="txtInterRegular16Bluegray900"
                            >
                              1234 ****
                            </Text>
                            <Text
                              className="md:ml-[0] ml-[59px] text-base text-bluegray-900"
                              size="txtInterRegular16Bluegray900"
                            >
                              28 Jan, 12.30 AM
                            </Text>
                            <Text
                              className="md:ml-[0] ml-[67px] text-base text-red-700"
                              size="txtInterMedium16Red700"
                            >
                              -$2,500
                            </Text>
                            <Button
                              className="cursor-pointer leading-[normal] min-w-[100px] md:ml-[0] ml-[47px] rounded-[17.5px] text-[15px] text-center"
                              color="indigo_600"
                              size="xs"
                              variant="outline"
                            >
                              Download
                            </Button>
                          </div>
                          <Line className="bg-gray-105 h-px w-full" />
                        </div>
                        <div className="flex flex-col gap-[15px] items-center justify-start w-full">
                          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                            <Button
                              className="flex h-[30px] items-center justify-center rounded-[50%] w-[30px]"
                              shape="circle"
                              color="green_600"
                              size="xs"
                              variant="outline"
                            >
                              <Img
                                src="images/img_arrow_green_600.svg"
                                alt="Arrow One"
                              />
                            </Button>
                            <Text
                              className="ml-3.5 md:ml-[0] text-base text-bluegray-900"
                              size="txtInterRegular16Bluegray900"
                            >
                              Freepik Sales
                            </Text>
                            <Text
                              className="md:ml-[0] ml-[83px] text-base text-bluegray-900"
                              size="txtInterRegular16Bluegray900"
                            >
                              #12548796
                            </Text>
                            <Text
                              className="md:ml-[0] ml-[67px] text-base text-bluegray-900"
                              size="txtInterRegular16Bluegray900"
                            >
                              Transfer
                            </Text>
                            <Text
                              className="md:ml-[0] ml-[62px] text-base text-bluegray-900"
                              size="txtInterRegular16Bluegray900"
                            >
                              1234 ****
                            </Text>
                            <Text
                              className="md:ml-[0] ml-[59px] text-base text-bluegray-900"
                              size="txtInterRegular16Bluegray900"
                            >
                              25 Jan, 10.40 PM
                            </Text>
                            <Text
                              className="md:ml-[0] ml-[67px] text-base text-green-600"
                              size="txtInterMedium16Green600"
                            >
                              +$750
                            </Text>
                            <Button
                              className="cursor-pointer leading-[normal] min-w-[100px] md:ml-[0] ml-[59px] rounded-[17.5px] text-[15px] text-center"
                              color="indigo_600"
                              size="xs"
                              variant="outline"
                            >
                              Download
                            </Button>
                          </div>
                          <Line className="bg-gray-105 h-px w-full" />
                        </div>
                        <div className="flex flex-col gap-[15px] items-center justify-start w-full">
                          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                            <Button
                              className="flex h-[30px] items-center justify-center rounded-[50%] w-[30px]"
                              shape="circle"
                              color="red_700"
                              size="xs"
                              variant="outline"
                            >
                              <Img src="images/img_arrow.svg" alt="Arrow Two" />
                            </Button>
                            <Text
                              className="ml-3.5 md:ml-[0] text-base text-bluegray-900"
                              size="txtInterRegular16Bluegray900"
                            >
                              Mobile Service
                            </Text>
                            <Text
                              className="md:ml-[0] ml-[73px] text-base text-bluegray-900"
                              size="txtInterRegular16Bluegray900"
                            >
                              #12548796
                            </Text>
                            <Text
                              className="md:ml-[0] ml-[67px] text-base text-bluegray-900"
                              size="txtInterRegular16Bluegray900"
                            >
                              Service
                            </Text>
                            <Text
                              className="md:ml-[0] ml-[68px] text-base text-bluegray-900"
                              size="txtInterRegular16Bluegray900"
                            >
                              1234 ****
                            </Text>
                            <Text
                              className="md:ml-[0] ml-[59px] text-base text-bluegray-900"
                              size="txtInterRegular16Bluegray900"
                            >
                              20 Jan, 10.40 PM
                            </Text>
                            <Text
                              className="md:ml-[0] ml-[67px] text-base text-red-700"
                              size="txtInterMedium16Red700"
                            >
                              -$150
                            </Text>
                            <Button
                              className="cursor-pointer leading-[normal] min-w-[100px] ml-16 md:ml-[0] rounded-[17.5px] text-[15px] text-center"
                              color="indigo_600"
                              size="xs"
                              variant="outline"
                            >
                              Download
                            </Button>
                          </div>
                          <Line className="bg-gray-105 h-px w-full" />
                        </div>
                        <div className="flex flex-col gap-[15px] items-center justify-start w-full">
                          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                            <Button
                              className="flex h-[30px] items-center justify-center rounded-[50%] w-[30px]"
                              shape="circle"
                              color="red_700"
                              size="xs"
                              variant="outline"
                            >
                              <Img
                                src="images/img_arrow.svg"
                                alt="Arrow Three"
                              />
                            </Button>
                            <Text
                              className="ml-3.5 md:ml-[0] text-base text-bluegray-900"
                              size="txtInterRegular16Bluegray900"
                            >
                              Wilson
                            </Text>
                            <Text
                              className="md:ml-[0] ml-[136px] text-base text-bluegray-900"
                              size="txtInterRegular16Bluegray900"
                            >
                              #12548796
                            </Text>
                            <Text
                              className="md:ml-[0] ml-[67px] text-base text-bluegray-900"
                              size="txtInterRegular16Bluegray900"
                            >
                              Transfer
                            </Text>
                            <Text
                              className="md:ml-[0] ml-[62px] text-base text-bluegray-900"
                              size="txtInterRegular16Bluegray900"
                            >
                              1234 ****
                            </Text>
                            <Text
                              className="md:ml-[0] ml-[59px] text-base text-bluegray-900"
                              size="txtInterRegular16Bluegray900"
                            >
                              15 Jan, 03.29 PM
                            </Text>
                            <Text
                              className="md:ml-[0] ml-[67px] text-base text-red-700"
                              size="txtInterMedium16Red700"
                            >
                              -$1050
                            </Text>
                            <Button
                              className="cursor-pointer leading-[normal] min-w-[100px] md:ml-[0] ml-[54px] rounded-[17.5px] text-[15px] text-center"
                              color="indigo_600"
                              size="xs"
                              variant="outline"
                            >
                              Download
                            </Button>
                          </div>
                          <Line className="bg-gray-105 h-px w-full" />
                        </div>
                        <div className="flex flex-col items-center justify-start w-full">
                          <div className="flex flex-col gap-3 items-center justify-start w-full">
                            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                              <Button
                                className="flex h-[30px] items-center justify-center rounded-[50%] w-[30px]"
                                shape="circle"
                                color="green_600"
                                size="xs"
                                variant="outline"
                              >
                                <Img
                                  src="images/img_arrow_green_600.svg"
                                  alt="Arrow Four"
                                />
                              </Button>
                              <Text
                                className="ml-3.5 md:ml-[0] text-base text-bluegray-900"
                                size="txtInterRegular16Bluegray900"
                              >
                                Emilly
                              </Text>
                              <Text
                                className="md:ml-[0] ml-[141px] text-base text-bluegray-900"
                                size="txtInterRegular16Bluegray900"
                              >
                                #12548796
                              </Text>
                              <Text
                                className="md:ml-[0] ml-[67px] text-base text-bluegray-900"
                                size="txtInterRegular16Bluegray900"
                              >
                                Transfer
                              </Text>
                              <Text
                                className="md:ml-[0] ml-[62px] text-base text-bluegray-900"
                                size="txtInterRegular16Bluegray900"
                              >
                                1234 ****
                              </Text>
                              <Text
                                className="md:ml-[0] ml-[59px] text-base text-bluegray-900"
                                size="txtInterRegular16Bluegray900"
                              >
                                14 Jan, 10.40 PM
                              </Text>
                              <Text
                                className="md:ml-[0] ml-[69px] text-base text-green-600"
                                size="txtInterMedium16Green600"
                              >
                                +$840
                              </Text>
                              <Button
                                className="cursor-pointer leading-[normal] min-w-[100px] md:ml-[0] ml-[58px] rounded-[17.5px] text-[15px] text-center"
                                color="indigo_600"
                                size="xs"
                                variant="outline"
                              >
                                Download
                              </Button>
                            </div>
                            <Line className="bg-gray-105 h-px w-full" />
                          </div>
                        </div>
                      </List>
                    </div>
                  </React.Fragment>
                ))}
              />
              <div className="flex flex-row items-center justify-end md:ml-[0] ml-[783px] w-[30%] md:w-full">
                <div className="flex flex-row items-center justify-evenly w-[28%]">
                  <Img
                    className="cursor-pointer h-6 w-6"
                    src="images/img_arrowleft.svg"
                    alt="arrowleft"
                    onClick={() => sliderRef1.current?.slidePrev?.()}
                  />
                  <Text
                    className="ml-1 text-[15px] text-indigo-600"
                    size="txtInterMedium15"
                  >
                    Previous
                  </Text>
                </div>
                <Button
                  className="cursor-pointer font-medium h-10 leading-[normal] ml-3 rounded-[10px] text-[15px] text-center w-10"
                  color="indigo_600"
                  size="sm"
                  variant="fill"
                >
                  1
                </Button>
                <Text
                  className="ml-[11px] text-[15px] text-indigo-600"
                  size="txtInterMedium15"
                >
                  2
                </Text>
                <Text
                  className="ml-[27px] text-[15px] text-indigo-600"
                  size="txtInterMedium15"
                >
                  3
                </Text>
                <Text
                  className="ml-[27px] text-[15px] text-indigo-600"
                  size="txtInterMedium15"
                >
                  4
                </Text>
                <div className="flex flex-row items-center justify-evenly ml-7 w-[19%]">
                  <Text
                    className="text-[15px] text-indigo-600"
                    size="txtInterMedium15"
                  >
                    Next
                  </Text>
                  <Img
                    className="cursor-pointer h-6 ml-1 w-6"
                    src="images/img_arrowright.svg"
                    alt="arrowright"
                    onClick={() => sliderRef1.current?.slideNext?.()}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TransactionPage;
