import React from "react";

import { Sidebar } from "react-pro-sidebar";

import { Img, Line, Text } from "components";

const Sidebar11 = (props) => {
  return (
    <>
      <Sidebar className={props.className}>
        <div className="bg-white-A700 flex flex-col gap-[50px] items-center justify-start py-[30px] w-full">
          <div className="flex flex-row items-center justify-center w-[65%] md:w-full">
            <Img
              className="h-10 md:h-auto object-cover w-10"
              src="images/img_logo_indigo_600.png"
              alt="LOGO"
            />
            <Text
              className="ml-1 sm:text-[21px] md:text-[23px] text-[25px] text-indigo-600"
              size="txtInterBold25"
            >
              FirstBank
            </Text>
          </div>
          <div className="flex flex-col items-start justify-start mb-[334px] w-full">
            <div className="flex flex-col items-start justify-start p-[17px] w-full">
              <div className="flex flex-row gap-5 items-center justify-start md:ml-[0] ml-[23px] w-[65%] md:w-full">
                <Img
                  className="h-[25px] w-[25px]"
                  src="images/img_home_25X25.svg"
                  alt="home"
                />
                <Text
                  className="text-bluegray-400 text-lg"
                  size="txtInterMedium18Bluegray400"
                >
                  Dashboard
                </Text>
              </div>
            </div>
            <div className="flex flex-row gap-[34px] items-center justify-start w-[79%] md:w-full">
              <Line className="bg-indigo-600 h-[60px] rounded-br-[10px] rounded-tr-[10px] w-1.5" />
              <div className="flex flex-row gap-5 items-center justify-start w-4/5">
                <Img
                  className="h-[25px] w-[25px]"
                  src="images/img_file_25X25.svg"
                  alt="file"
                />
                <Text
                  className="text-indigo-600 text-lg"
                  size="txtInterMedium18"
                >
                  Transactions
                </Text>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start p-[17px] w-full">
              <div className="flex flex-row gap-5 items-start justify-start md:ml-[0] ml-[23px] w-[59%] md:w-full">
                <Img
                  className="h-[25px] w-[25px]"
                  src="images/img_user.svg"
                  alt="user"
                />
                <Text
                  className="text-bluegray-400 text-lg"
                  size="txtInterMedium18Bluegray400"
                >
                  Accounts
                </Text>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start p-[17px] w-full">
              <div className="flex flex-row gap-5 items-center justify-start md:ml-[0] ml-[23px] w-[70%] md:w-full">
                <Img
                  className="h-[25px] w-[25px]"
                  src="images/img_map.svg"
                  alt="map"
                />
                <Text
                  className="text-bluegray-400 text-lg"
                  size="txtInterMedium18Bluegray400"
                >
                  Investments
                </Text>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start p-[17px] w-full">
              <div className="flex flex-row gap-5 items-center justify-start md:ml-[0] ml-[23px] w-[72%] md:w-full">
                <Img
                  className="h-[25px] w-[25px]"
                  src="images/img_file.svg"
                  alt="file One"
                />
                <Text
                  className="text-bluegray-400 text-lg"
                  size="txtInterMedium18Bluegray400"
                >
                  Credit Cards
                </Text>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start p-[17px] w-full">
              <div className="flex flex-row gap-5 items-start justify-start md:ml-[0] ml-[23px] w-[45%] md:w-full">
                <Img
                  className="h-[25px] w-[25px]"
                  src="images/img_question.svg"
                  alt="question"
                />
                <Text
                  className="text-bluegray-400 text-lg"
                  size="txtInterMedium18Bluegray400"
                >
                  Loans
                </Text>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start p-[17px] w-full">
              <div className="flex flex-row gap-5 items-center justify-start md:ml-[0] ml-[23px] w-[56%] md:w-full">
                <Img
                  className="h-[25px] w-[25px]"
                  src="images/img_service1.svg"
                  alt="serviceOne"
                />
                <Text
                  className="text-bluegray-400 text-lg"
                  size="txtInterMedium18Bluegray400"
                >
                  Services
                </Text>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start p-[17px] w-full">
              <div className="flex flex-row gap-5 items-center justify-center w-3/4 md:w-full">
                <Img
                  className="h-[25px] w-[25px]"
                  src="images/img_lightbulb.svg"
                  alt="lightbulb"
                />
                <Text
                  className="text-bluegray-400 text-lg"
                  size="txtInterMedium18Bluegray400"
                >
                  My Privileges
                </Text>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start p-[17px] w-full">
              <div className="flex flex-row gap-5 items-center justify-start md:ml-[0] ml-[23px] w-1/2 md:w-full">
                <Img
                  className="h-[25px] w-[25px]"
                  src="images/img_settings.svg"
                  alt="settings"
                />
                <Text
                  className="text-bluegray-400 text-lg"
                  size="txtInterMedium18Bluegray400"
                >
                  Setting
                </Text>
              </div>
            </div>
          </div>
        </div>
      </Sidebar>
    </>
  );
};

Sidebar11.defaultProps = {};

export default Sidebar11;
