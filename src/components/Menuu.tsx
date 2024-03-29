import React, { useState } from "react";
import type { MenuProps } from "antd";
import { items } from "./MenuItems";
import { Menu, ConfigProvider } from "antd";
 

const Menuu: React.FC = () => {
  const [current, setCurrent] = useState("mail");

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <>
      <div className="w-[62%] 2xl:w-[70%] border-b-[2px] border-yellow-300 pb-[1rem] block mx-auto "></div>
      <div className="flex justify-center ">
        {" "}
        <ConfigProvider
          theme={{
            token: {
              borderRadius: 5,
              colorText: "#fff",
              colorSplit: "none",
              padding: 12,
            },
            components: {
              Menu: {
                itemBg: "#fff",
                colorBgElevated: "#333",
                //  colorBgElevated: "transparent",
                itemColor: "#fadb14",
                itemHoverBg: "#555",
                horizontalItemSelectedColor: "#fff",
                itemSelectedBg: "#555",
                itemSelectedColor: "#fadb14",
                horizontalItemHoverColor: "#fff",
                iconSize: 20,
                iconMarginInlineEnd: 4,
              },
            },
          }}
        >
          <Menu
            theme="light"
            onClick={onClick}
            selectedKeys={[current]}
            mode="horizontal"
            items={items}
            className="  flex justify-center w-[60vw] bg-transparent text-[1rem] font-semibold "
          />
        </ConfigProvider>
      </div>
    </>
  );
};

export default Menuu;
