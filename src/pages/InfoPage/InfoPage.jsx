import * as itemsAPI from "../../utilities/fetch-script";
import { useState, useEffect } from "react";
import "./InfoPage.css";
import {
  Tooltip,
  Card,
  Image,
  Modal,
  Button,
  Tag,
  Col,
  Row,
  Statistic,
  Drawer,
  Table
} from "antd";
import {
  ExperimentOutlined,
  HeartOutlined,
  WalletOutlined
} from "@ant-design/icons";
import "./InfoPage.css";

const { Meta } = Card;
const { Countdown } = Statistic;
const deadline = Date.now() + 1000 * 60 * 60;

export default function InfoPage() {
  // Buy now Drawer
  const [buyDrawerVisible, setBuyDrawerVisible] = useState(false);

  function toggleBuyDrawer() {
    setBuyDrawerVisible(!buyDrawerVisible);
  }

  // function showBuyDrawer () {
  //   setBuyDrawerVisible(true)
  // }

  // function closeBuyDrawer () {
  //   setBuyDrawerVisible(false)
  // }

  const [likes, setLikes] = useState(0);

  // Attributes Modal
  const [isModalVisible, setIsModalVisible] = useState(false);
  function handleCancelModal() {
    setIsModalVisible(false);
  }

  function showModal() {
    setIsModalVisible(true);
  }

  // Contract Address Modal
  const [isContractModalVisible, setIsContractModalVisible] = useState(false);
  function handleCancelContractModal() {
    setIsContractModalVisible(false);
  }

  function showContractModal() {
    setIsContractModalVisible(true);
  }

  const [item, setItem] = useState();

  useEffect(function () {
    async function getItem() {
      // const nft = await itemsAPI.getOne();
      // setItem(nft);
      // console.log(nft);

      var requestOptions = {
        method: "GET",
        redirect: "follow"
      };

      const apiKey = "demo";
      const baseURL = `https://eth-mainnet.g.alchemy.com/v2/${apiKey}/getNFTMetadata`;
      // const contractAddr = "0x5180db8f5c931aae63c74266b211f580155ecac8";
      const contractAddr = "0x2acAb3DEa77832C09420663b0E1cB386031bA17B";
      const tokenId = "5816";
      const tokenType = "erc721";
      // const fetchURL = `${baseURL}?contractAddress=${contractAddr}&tokenId=${tokenId}&tokenType=${tokenType}`;
      const fetchURL = `${baseURL}?contractAddress=${contractAddr}&tokenId=${tokenId}`;

      const result = await fetch(fetchURL, requestOptions)
        // takes JSON data and changes it to JS Object
        .then((response) => response.json())
        // converts JS object to JSON string
        .then((response) => JSON.stringify(response, null, 2))
        .then((result) => result)
        .catch((error) => console.log("error", error));

      const obj = result;
      // parses a JSON string, constructing the JS value or object
      const stringify = JSON.parse(obj);
      console.log(stringify);
      setItem(stringify);
    }
    getItem();
  }, []);

  // let baseIPFS = "";
  // if (item && item.metadata) {
  // const imageLength = item.metadata.image.length;
  // baseIPFS = item.metadata.image.slice(7, imageLength);
  // }

  function handleClick(evt) {
    console.log(evt.target);
    let tick = setTimeout(() => {
      evt.target.style.color = "hotpink";
      tick = setTimeout(() => {
        evt.target.style.color = "black";
      }, 500);
    }, 50);
    setLikes(likes + 1);
  }

  return (
    <div className="info__container">
      {/* <div className="info__example">
        <img src={`https://ipfs.io/ipfs/${baseIPFS}`} alt="" />
      </div> */}
      {item && item.metadata ? (
        <Col span={24}>
          <Card
            className="info__card"
            // cover={<Image src={item.metadata.image} alt="" />}
            actions={[
              <div onClick={showModal}>
                <ExperimentOutlined key="attributes" /> Attributes
              </div>,
              <div onClick={showContractModal}>
                <ExperimentOutlined key="attributes" /> Contract Address
              </div>
            ]}
            extra={
              <div className="info__like">
                <HeartOutlined onClick={(evt) => handleClick(evt)} />
                &nbsp;
                {likes ? likes : ""}
              </div>
            }
          >
            <Meta title={<h2>{item.title.toUpperCase()}</h2>} />
            <br />
            <Image src={item.metadata.image} alt="" />
            <br />
            {/* <img src={`https://ipfs.io/ipfs/${baseIPFS}`} alt="" /> */}

            <Meta
              // title={<h2>{item.title.toUpperCase()}</h2>}
              description={
                <>
                  <div className="item__sale__time">
                    <Countdown title="Sale Ends:" value={deadline} />
                  </div>
                  <div className="item__pricing">
                    <small>Current Price</small>
                    <div className="item__coin__price">
                      <img
                        src="https://cryptologos.cc/logos/ethereum-eth-logo.png"
                        alt=""
                      />
                      <p>&nbsp;8,888 &nbsp;&nbsp;</p>
                      <p>
                        <small> ($24,816,806.96)</small>
                      </p>
                    </div>
                    <div className="item__buybtn">
                      <Button type="primary" onClick={toggleBuyDrawer}>
                        <strong>Buy now</strong>
                      </Button>
                      <Drawer
                        title={
                          <div className="buyDrawer__heading">
                            <WalletOutlined /> &nbsp;
                            <strong>How To Buy NFT</strong>
                          </div>
                        }
                        placement="right"
                        width="240px"
                        visible={buyDrawerVisible}
                        onClose={toggleBuyDrawer}
                      >
                        <p>
                          To purchase an NFT, one needs to first create/own a{" "}
                          <strong>crypto wallet</strong> in order to store and
                          retrieve digital assets.
                          <br />
                          <br />
                          <strong>What is a crypto wallet?</strong>
                          <br />
                          <p className="info__cryptowallet">
                            Unlike traditional wallets, crypto wallets store
                            your private keys instead of physical money. These
                            private keys give you access, send, and receive
                            cryptocurrencies. They come in several forms such
                            as: <br />
                            (1) paper wallet - any physical medium to write down
                            on for your private keys <br />
                            (2) hardware wallet - keys stored in a thumb-drive
                            device <br />
                            (3) online wallet - keys stored in an app or other
                            software
                          </p>
                        </p>
                      </Drawer>
                      &nbsp;&nbsp;
                      <Button type="primary" ghost onClick={toggleBuyDrawer}>
                        <strong>Make offer</strong>
                      </Button>
                    </div>
                  </div>
                  <p className="item__description">
                    <strong>Description:</strong>
                    <br />
                    {item.description}
                  </p>
                </>
              }
            />
            <div className="NFT__link__container">
              <a
                href={item.metadata.external_url}
                target="_blank"
                rel="noreferrer"
              >
                View NFT
              </a>
            </div>
            {/* <p>Title: {item.title}</p> */}
            {/* <p>Description: {item.description}</p> */}
            {/* <Tooltip
              placement="left"
              autoAdjustOverflow
              color="blue"
              title="Contract address is where your contract is stored in the blockchain!"
            > */}
            {/* <Col className="contract-address">
              <Button>Contract Address</Button> */}
            {/* {item.contract.address} */}
            {/* </Col> */}
            {/* </Tooltip> */}
            {/* <p>External URL: {item.metadata.external_url}</p> */}
            {/* <ul> */}
            {/* {item.metadata.attributes.map((a) => {
              return (
                <li>
                  {a.value}, {a.trait_type}
                </li>
              );
            })} */}
            {/* </ul> */}

            {/* Attributes Modal */}
            <Modal
              title="Attributes"
              visible={isModalVisible}
              onCancel={handleCancelModal}
              footer={
                <Button key="submit" type="primary" onClick={handleCancelModal}>
                  Ok
                </Button>
              }
            >
              <>
                <p>
                  Non-fungible tokens have <strong>unique attributes</strong>;
                  they are usually linked to a specific asset. They can be used
                  to prove the ownership of digital items like game skins right
                  through to the ownership of physical assets.
                </p>
                {item.metadata.attributes.map((a) => {
                  return (
                    <Tag className="attr-tags" color="volcano">
                      {a.trait_type}: {a.value}
                    </Tag>
                  );
                })}
              </>
            </Modal>

            {/* Contract Address Modal */}
            <Modal
              title="Contract Address"
              visible={isContractModalVisible}
              onCancel={handleCancelContractModal}
              footer={
                <Button
                  key="submit"
                  type="primary"
                  onClick={handleCancelContractModal}
                >
                  Ok
                </Button>
              }
            >
              <p>
                <strong>
                  The contract address is a unique address of where your NFTs
                  are stored.
                </strong>
              </p>
              {item.contract.address}
            </Modal>
          </Card>
        </Col>
      ) : (
        <h3>Loading... </h3>
      )}
    </div>
  );
}
