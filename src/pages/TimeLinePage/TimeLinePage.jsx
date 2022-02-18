import "./TimeLinePage.css";
import { Timeline } from "antd";

export default function TimeLinePage() {
  return (
    <div className="timeline__container">
      <h1 className="timeline__title">History of NFTS</h1>

      <Timeline mode="left" className="timeline__list">
        <Timeline.Item color="green" label="2012-2013">
          Colored Coins - original idea where these tokens represent real world
          assets on blockchain
        </Timeline.Item>
        <Timeline.Item color="yellow" label="2014">
          Counterparty - a financial platform founded by 3 people built on
          Bitcoin blockchain. Counterparty allowed asset creation and had a
          decentralized exchange
        </Timeline.Item>
        <Timeline.Item color="orange" label="April 2015">
          Spells of Genesis & Counterparty - Spell of Genesis is a game created
          by a team that issued in-game assets onto a blockchain via
          Counterparty. They were also among the first to launch an ICO and
          helped fund Counterparty.
        </Timeline.Item>
        <Timeline.Item color="red" label="August 2016">
          Trading Cards on Counterparty - Counterparty teamed up with Force of
          Will, a trading card game which launched on the Counterparty platform.
          The card game sale soared in popularity and was ranked 4th behind
          Pokemon, Yu-Gi-Oh and Magic.
        </Timeline.Item>
        <Timeline.Item color="purple" label="October 2016">
          Pepes on Counteraparty - memes started making their way onto the
          Counterparty platform. "Rare Pepes" were a particular asset that
          became popular. In early 2017, a Rare Pepe auction was held which was
          the first time creators around the world could submit and sell their
          work.
        </Timeline.Item>
        <Timeline.Item color="turquoise" label="2017">
          Cryptopunks - a pair of creators of Larva Labs created unique
          characters generated ont eh Ethereum blockchain. The collection was
          limited to 10,000 and the project was named Cryptopunks.
        </Timeline.Item>
        <Timeline.Item label="2018 - Now" color="#00CCFF">
          NFT BOOM - NFTs have slowly been getting public awareness and exploded
          in early 2021. The NFT movement hit an inflection point during
          Valentine's day 2018 when a piece of CryptoArt called the Forever Rose
          was transactioned at $1M in a charitable option. Numerous platforms
          has since surfaced online hosting different creators and collectors
          such as Opensea, Mintable, Portion, and Niftex.
        </Timeline.Item>
      </Timeline>
    </div>
  );
}
