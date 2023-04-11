import React, { useState } from "react";
import { Table, Button } from "antd";
import { LinkedinOutlined, GithubOutlined } from "@ant-design/icons";

import activeLeads from "../db/activeLeads";
import { get } from "lodash";

const ActiveLeadsTable = (props) => {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      render: (_, record, index) => {
        return (
          <div key={`key${index}`}>
            {record.name} <br />
            <a
              target="_blank"
              href="https://www.linkedin.com/in/shekhar-suman-861355b1/"
            >
              <LinkedinOutlined /> Linkedin
            </a>
            <br />
            <a target="_blank" href="https://github.com/shekhar94">
              <GithubOutlined /> Github
            </a>
          </div>
        );
      },
    },
    {
      title: "Job Title",
      dataIndex: "jobTitle",
    },
    {
      title: "Company",
      dataIndex: "company",
      filters: [
        {
          text: "OneShot",
          value: "OneShot",
        },
        {
          text: "Google",
          value: "Google",
        },
      ],
      onFilter: (value, record) => record.address.indexOf(value) === 0,
    },
    {
      title: "Mails Sent",
      dataIndex: "mailsSent",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.mailsSent - b.mailsSent,
      render: (text) => {
        return (
          <div>
            {text} <Button type="link">See Mails</Button>
          </div>
        );
      },
    },
    {
      title: "Open Rate",
      dataIndex: "openRate",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.openRate - b.openRate,
    },
    {
      title: "Action",
      key: "operation",
      fixed: "right",
      width: 100,
      render: () => <a>Action</a>,
    },
  ];
  let activeLeads = get(props, 'leadsData.activeleads' , []);
  const onChange = (pagination, filters, sorter, extra) => {
  };
  return (
    <Table
      columns={columns}
      dataSource={activeLeads}
      pagination={{
        pageSize: 5,
      }}
      scroll={{
        y: 550,
      }}
      onChange={onChange}
    />
  );
};

export default ActiveLeadsTable;
