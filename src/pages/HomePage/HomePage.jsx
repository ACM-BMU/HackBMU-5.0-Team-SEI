import "./HomePage.css";

export default function HomePage() {
  return (
    <div className="home__container">
      <h1>Welcome to InvestMint</h1>
      <div className="home__getStarted">
        <div className="home__mission">
          <h1>Mission Statement</h1>
          <br />
          <button className="btn btn-primary">Get Started</button>
        </div>
        <div>
          <img
            src="https://mediacloud.kiplinger.com/image/private/s--X-WVjvBW--/f_auto,t_content-image-full-desktop@1/v1620225658/Investing/nft-2021.jpg"
            alt=""
          />
        </div>
      </div>

      <div className="home__investing__container">
        <div className="home__investing__title">
          <h1 id="investing">Investing in NFTs </h1>{" "}
          <h1 id="simplified">Simplified</h1>
        </div>
        <div className="home__investing__content">
          <div className="home__investing__text">
            Investing in new technology can be intimidating and overwhelming. We
            break down the barriers of entry and simplify the process so
            everyone has the opportunity to invest in their future.
          </div>

          <img src="https://i1.wp.com/www.additudemag.com/wp-content/uploads/2021/01/GettyImages-532572642.jpg?resize=1280%2C720px&ssl=1" />
        </div>
      </div>
      <div className="home__how">
        <h1>How It Works</h1>
        <div className="home__how__column">
          <div className="home__how__info">
            <p>Deposit</p>
            <img
              src="https://pnimg.net/w/sitemap-attachments/1/5e4/1191043522.png"
              alt=""
            />
          </div>
          <div className="home__how__info">
            <p>Preferences</p>
            <img
              src="https://talkstar-assets.s3.amazonaws.com/production/playlists/playlist_164/choices.jpg"
              alt=""
            />
          </div>
          <div className="home__how__info">
            <p>Invest</p>
            <img
              src="https://media.gq-magazine.co.uk/photos/5e25d00550c26e0008a9b030/master/pass/20200120-invest.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
