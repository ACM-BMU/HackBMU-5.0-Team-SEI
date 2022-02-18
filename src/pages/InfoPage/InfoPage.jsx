import * as itemsAPI from "../../utilities/fetch-script";
import { useState, useEffect } from "react";
import "./InfoPage.css";
import { Tooltip, Card, Image, Modal, Button, Tag, Col, Row } from "antd";
import { ExperimentOutlined, HeartOutlined } from "@ant-design/icons";
import "./InfoPage.css";

const { Meta } = Card;

export default function InfoPage() {
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
      const contractAddr = "0x5180db8f5c931aae63c74266b211f580155ecac8";
      // const contractAddr = "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d";
      const tokenId = "5";
      const tokenType = "erc721";
      const fetchURL = `${baseURL}?contractAddress=${contractAddr}&tokenId=${tokenId}&tokenType=${tokenType}`;

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

  let baseIPFS = "";
  if (item && item.metadata) {
    const imageLength = item.metadata.image.length;
    baseIPFS = item.metadata.image.slice(7, imageLength);
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
            extra={<HeartOutlined />}
          >
            <Meta title={<h2>{item.title.toUpperCase()}</h2>} />
            <Image src={item.metadata.image} alt="" />
            {/* <img src={item.metadata.image} alt="" /> */}

            <Meta
              // title={<h2>{item.title.toUpperCase()}</h2>}
              description={
                <p className="item__description">{item.description}</p>
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
              {item.metadata.attributes.map((a) => {
                return (
                  <Tag className="attr-tags" color="volcano">
                    {a.trait_type}: {a.value}
                  </Tag>
                );
              })}
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
                The contract address is a unique address of where your NFTs are
                stored.
              </p>
              {item.contract.address}
            </Modal>
          </Card>
        </Col>
      ) : (
        <h3>no data</h3>
      )}
    </div>
  );
}
