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
      description: "OpenSea is the world's first and largest NFT marketplace.",
      name: "OpenSea"
    },
    {
      key: "2",
      link: "https://foundation.app/",
      description:
        "Foundation is a platform where creators can use the Ethereum blockchain to value their work in entirely new ways.",
      name: "Foundation"
    },
    {
      key: "3",
      link: "https://ethereum.org/en/nft/",
      description: "Ethereum.org's guide to NFTs.",
      name: "Ethereum"
    },
    {
      key: "4",
      link:
        "https://linda.mirror.xyz/df649d61efb92c910464a4e74ae213c4cab150b9cbcc4b7fb6090fc77881a95d",
      description: "A beginner's guide to NFTs by Linda Xie.",
      name: "Linda Xie"
    },
    {
      key: "5",
      link: "https://metamask.io/",
      description: "MetaMask is a crypto wallet & gateway to blockchain apps.",
      name: "MetaMask"
    },
    {
      key: "6",
      link: "https://www.coinbase.com/wallet",
      description:
        "Coinbase Wallet is a self-custody wallet, giving you complete control of your crypto.",
      name: "Coinbase Wallet"
    }
  ];

  return (
    <>
      <p className="resources__disclaimer">
        Disclaimer: We are not affiliated with any of the following parties.
      </p>

      <Table
        dataSource={dataSource}
        columns={columns}
        className="resources__table"
      />
    </>
  );
}
