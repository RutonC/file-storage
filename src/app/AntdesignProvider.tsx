"use client";
import NavBar from "@/components/nav-bar";
import SidebarAntd from "@/components/sidebar";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { Layout } from "antd";
import { useState } from "react";

const { Header, Sider, Content, Footer } = Layout;

const AntdProvider = ({ children }: { children: React.ReactNode }) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <AntdRegistry>
      <Layout className="h-full">
        <Sider
          className="text-black"
          width={256}
          style={
            {width:"100%"}
          }
          theme="light"
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
        >
          <SidebarAntd />
        </Sider>
        <Layout>
          <Header
            style={{
              display: "flex",
              backgroundColor: "#fff",
              alignItems: "center",
              borderBottomWidth: 1,
            }}
          >
            <NavBar />
          </Header>
          <Content>{children}</Content>
        </Layout>
      </Layout>
    </AntdRegistry>
  );
};
export default AntdProvider;
