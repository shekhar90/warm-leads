import React, { useState } from "react";

import { Table, Button } from "antd";
import { LinkedinOutlined, GithubOutlined } from "@ant-design/icons";
import warmLeads from "../db/warmLeads";
import Email from "./Emails";

const WarmLeadsTable = () => {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      // filters: [
      //   {
      //     text: "Shekhar",
      //     value: "shekhar",
      //   },
      //   {
      //     text: "Jim",
      //     value: "Jim",
      //   },
      // ],
      // specify the condition of filtering result
      // here is that finding the name started with `value`
      // onFilter: (value, record) => record.name.indexOf(value) === 0,
      // sorter: (a, b) => a.name.length - b.name.length,
      // sortDirections: ["descend"],
      render: (_, record) => {
        return (
          <div>
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
      //   defaultSortOrder: "descend",
      //   sorter: (a, b) => a.jobTitle - b.jobTitle,
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
      render: (text, record) => {
        console.log("record", record);
        return (
          <div>
            {text} <Email record={record} /> 
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
    }
  ];
  const data = warmLeads;
  const onChange = (pagination, filters, sorter, extra) => {
    // console.log("params", pagination, filters, sorter, extra);
  };
  return (
    <Table
      columns={columns}
      dataSource={data}
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

export default WarmLeadsTable;
