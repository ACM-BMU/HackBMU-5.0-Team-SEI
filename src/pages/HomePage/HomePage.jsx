import "./HomePage.css";
import { Card, Button, Row, Col } from "antd";
import { Link } from "react-router-dom";
import { Typography } from "antd";
const { Title } = Typography;

export default function HomePage() {
  return (
    <Row>
      <Col span={24}>
        <div className="home__container">
          <h1 className="display-2"><strong>Welcome to InvestMint</strong></h1>

          <Card className="home__info">
            <div className="home__info__flex">
              <Row>
                <Col
                  xs={{ span: 24 }}
                  sm={{ span: 12 }}
                  id="home__what__img"
                >
                  <div style={{ height: "150px", width: "fit-content" }}>
                    {/* <img
                      className="card__img"
                      src="https://assets.bwbx.io/images/users/iqjWHBFdfxIU/izUv0yep.bwI/v1/1200x-1.jpg"
                      alt=""
                    /> */}
                  </div>
                </Col>
                <Col xs={{ span: 24 }} sm={{ span: 12 }}>
                  <div className="home__info_detail home__info__what">
                    <Title level={4}>What is an NFT?</Title>
                    <p>
                      An NFT (Non-fungible token) is a digital asset that
                      represents real world objects such as artwork, video
                      clips, pokemon cards, even a Twitter post!
                      <br />
                      <strong>The possibilities are endless.</strong>
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
          </Card>

          <Card className="home__info">
            <div className="home__info__flex">
              <Row>
                <Col xs={{ span: 24 }} sm={{ span: 12 }} id="home__where__img">
                  <div style={{ height: "150px", width: "fit-content" }}>
                    {/* <img
                      src="https://zionpeople.nz/wp-content/uploads/2021/10/confused-1.jpeg"
                      alt=""
                    /> */}
                  </div>
                </Col>
                <Col xs={{ span: 24 }} sm={{ span: 12 }}>
                  <div className="home__info_detail home__info__where">
                    <Title level={5}>Where does it come from?</Title>
                    <p>
                      The concept of NFTs was first introduced in a paper from
                      December 2012 by Meni Rosenfeld. The first known NFT
                      "Quantum" was created on May 2014. Several years of
                      development and experimentation led a shift for NFTs onto
                      the Ethereum blockchain.
                    </p>
                    <Link to="/timeline">
                      <Button className="home__info__btn__timeline">
                        Timeline of NFTs
                      </Button>
                    </Link>
                  </div>
                </Col>
              </Row>
            </div>
          </Card>

          <Card className="home__info">
            <div className="home__info__flex">
              <Row>
                <Col xs={{ span: 24 }} sm={{ span: 12 }} id="home__how__img">
                  <div style={{ height: "150px", width: "fit-content" }}>
                    {/* <img
                    src="https://image.coinpedia.org/wp-content/uploads/2021/08/24183257/Minting-NFT--780x470.webp"
                    alt=""
                  /> */}
                  </div>
                </Col>
                <Col xs={{ span: 24 }} sm={{ span: 12 }}>
                  <div className="home__info_detail home__info__how">
                    <Title level={5}>How are NFTs made?</Title>
                    <p className="home__info__how">
                      The process of creating an NFT is called{" "}
                      <strong>minting</strong>. You can create an NFT by
                      uploading a high quality representation of your digital
                      item on a NFT marketplace such as OpenSea.
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
          </Card>

          <Card className="home__info">
            <div className="home__info__flex">
              <Row>
                <Col xs={{ span: 24 }} sm={{ span: 12 }} id="home__why__img">
                  <div style={{ height: "150px", width: "fit-content" }}>
                    {/* <img
                      src="https://zionpeople.nz/wp-content/uploads/2021/10/confused-1.jpeg"
                      alt=""
                    /> */}
                  </div>
                </Col>
                <Col xs={{ span: 24 }} sm={{ span: 12 }}>
                  <div className="home__info_detail home__info__why">
                    <Title level={5}>
                      Why should you learn more about NFTs ?
                    </Title>
                    <p>
                      NFTs are an exciting because of the potential its
                      technology could bring and where it could take us in the
                      future. You can imagine how the concept of NFTs can change
                      the way we record and transfer information. Whether you
                      are a potential investor or just a curious mind, it
                      doesn't hurt to learn more about the ever growing and
                      popular trend of NFTs.
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
          </Card>

          <Link to="/info">
            <Button type="primary">Learn more</Button>
          </Link>
        </div>
      </Col>
    </Row>
  );
}
