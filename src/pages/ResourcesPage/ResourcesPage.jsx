import "./ResourcesPage.css";
import { Link } from "react-router-dom";
import { Table } from "antd";

export default function ResourcesPage() {
  const columns = [
    {
      title: "Link",
      dataIndex: "link",
      key: "link",
      render: (text, link) => (
        <a href={link.link} target="_blank" rel="noreferrer">
          {link.name}
        </a>
      )
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description"
    }
  ];

  const dataSource = [
    {
      key: "1",
      link: "https://opensea.io/",
      description: "World's Largest NFT Marketplace",
      name: "OpenSea"
    },
    {
      key: "2",
      link: "https://foundation.app/",
      description: "Community-driven NFT Marketplace",
      name: "Foundation"
    },
    {
      key: "3",
      link: "https://ethereum.org/en/nft/",
      description: "NFTs 101",
      name: "Ethereum"
    },
    {
      key: "4",
      link:
        "https://linda.mirror.xyz/df649d61efb92c910464a4e74ae213c4cab150b9cbcc4b7fb6090fc77881a95d",
      description: "Beginner's guide to NFTs",
      name: "Linda Xie"
    }
  ];

  return (
    <Table
      dataSource={dataSource}
      columns={columns}
      className="resources__table"
    />
  );
}
