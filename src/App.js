import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  AlertOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme, Dropdown, message, Space, Badge } from "antd";
import React, { useState } from "react";
import WarmLeadsTable from "./components/WarmLeadsTable";
import ActiveLeadsTable from "./components/ActiveLeadsTable";
import mockData from "./db/mockData";
import "./App.css";

const { Header, Sider, Content, Footer } = Layout;
const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [filterVal, setFilterVal] = useState("Filter");
  const [leadsData, setLeadsData] = useState(null);
  const [warmLeads, setWarmLeads] = useState('');
  const [activeLeads, setActiveLeads] = useState('');
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const [selectedMenu, setSelectedMenu] = useState("warmLeads");
  const handleMenuClick = ({ item, key }) => {
    setSelectedMenu(key);
  };
  const handleFilterButtonClick = async (e) => {
    const selected = e.key;
    const selectedItem = items.find((item) => item.key === selected);
    setFilterVal(selectedItem.label);
    // await getDataFromBackend()
    const option = selectedItem.label.toLowerCase();
    console.log(mockData[option]);
    setLeadsData(mockData[option]);
    setActiveLeads(mockData[option].activeleads.length);
    setWarmLeads(mockData[option].warmleads.length)
    message.info(`Filtering results on ${selectedItem.label} basis`);
  };

  const items = [
    {
      label: "Monthly",
      key: "1",
      icon: <UserOutlined />,
    },
    {
      label: "Quarterly",
      key: "2",
      icon: <UserOutlined />,
    },
  ];
  const menuProps = {
    items,
    onClick: handleFilterButtonClick,
  };

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["2"]}
          items={[
            {
              key: "1",
              icon: <UserOutlined />,
              label: "Shekhar Suman",
            },
            {
              key: "2",
              label: "My Leads",
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: () => setCollapsed(!collapsed),
            }
          )}
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <div className={"leadsHeader"}>
            <Space direction="horizontal">
              <Badge
                color="gold"
                text={`${
                  warmLeads
                } Warm Leads`}
              />
              <Badge
                color="blue"
                text={`${
                  activeLeads
                } Active Leads`}
              />
            </Space>
          </div>

          <Dropdown.Button className="filter" menu={menuProps}>
            {filterVal}
          </Dropdown.Button>

          <Menu
            onClick={handleMenuClick}
            selectedKeys={[selectedMenu]}
            mode="horizontal"
            items={[
              {
                label: "Warm Leads",
                icon: <AlertOutlined />,
                key: "warmLeads",
              },
              {
                label: "Active Leads",
                icon: <UserOutlined />,
                key: "activeLeads",
              },
            ]}
          />
          {selectedMenu === "warmLeads" && <WarmLeadsTable />}
          {selectedMenu === "activeLeads" && <ActiveLeadsTable />}
        </Content>
        <Footer style={{ textAlign: "center" }}>
          OneShot.ai ©2023 Created by OneShot
        </Footer>
      </Layout>
    </Layout>
  );
};
export default App;
