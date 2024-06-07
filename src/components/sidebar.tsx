"use client"
import { Menu } from "antd";
import React from "react";
import { useRouter } from "next/navigation";
import { getItem } from "@/utils/getItem-menu";
import { Gauge, Settings } from "lucide-react";

const menuItems = [
  getItem("Dashboard", "/", <Gauge strokeWidth={1} size={24} />),
  getItem("Definições", "/settings", <Settings strokeWidth={1} size={24} />),
];

function SidebarAntd() {
  const router = useRouter();

  const handleMenuClick = ({ key }: any) => {
    if (key) {
      router.push(key);
    }
  };
  return (
    <div className="flex flex-col items-center py-4 w-full  h-full">
      <h2 className="text-2xl text-black font-bold">File Storage</h2>
      <div className="my-5">
        <Menu
          style={{ width: 256, paddingInline: 2, borderRightWidth: 0 }}
          mode="inline"
          items={menuItems}
          onClick={handleMenuClick}
        />
      </div>
    </div>
  );
}

export default SidebarAntd;
