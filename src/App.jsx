import "./App.scss";
import Navbar from "./components/Navbar";

function App() {

  return (
    <div className="App">
      <Navbar />
      <section className="section-1" id="home">
        <div className="hero-content">
          <img alt="" src="/images/dcflip-hero-img.png" className="hero-img" />
        </div>
      </section>
      <section className="section-2" id="story">
        <div className="info-wrapper">
          <div className="text-wrapper">
            <img
              alt="what tf is dcflip?"
              src="/images/what-tf-is-dcflip.png"
              className="about-dcf"
            />
            <p>
              DogecoinFlip is a decentralized gambling project focused on
              providing dynamic reflections and rewards by holding $LUCKY,
              playing games, or staking your tokens. Investors also get passive
              revenue from two sources: tax acquired from token purchases/sells
              & fees generated from coin flipping.
            </p>
          </div>

          <div className="img-wrapper">
            <img alt="" src="/images/dcflip-ui.png" className="ui-img" />
          </div>
        </div>
      </section>
      <section className="section-3">
        <img
          alt=""
          src="/images/section-3-header.png"
          className="sect-header"
        />

        <div className="reasons-ctn">
          <div className="reason">
            <img alt="" src="/images/rev-share.png" className="desc-img" />

            <img
              alt=""
              src="/images/rev-share-for-holders.png"
              className="reason-header"
            />
            <p>
              DCflip is a smart contract that allows users to play "double or
              nothing" with their $DC tokens and 50% of the gambling revenue
              goes to the holders of $LUCKY.
            </p>
          </div>

          <div className="reason">
            <img alt="" src="/images/doge-img.png" className="desc-img" />

            <img
              alt=""
              src="/images/much-good-communty.png"
              className="reason-header"
            />
            <p>
              Our community ethos emphasizes inclusivitiy and values each and
              every DCF participant. In short, we stand for fairness and equal
              opportunity for all.
            </p>
          </div>

          <div className="reason">
            <img alt="" src="/images/fun-doge.png" className="desc-img" />

            <img alt="" src="/images/fun-asf.png" className="reason-header fun" />
            <p>
              DCflip was created so that degens can have fun and go crazy while
              gambling responsibly.
            </p>
          </div>
        </div>
      </section>

      <section className="section-4">
        <img alt="" src="/images/degenmap.png" className="roadmap-title" />

        <div className="roadmap-ctn">
          <div className="phase">
            <img alt="" src="/images/phase1.png" className="phase-header" />
            <ul>
              <li>Idea, research, and roadmap formulation</li>
              <li>Private sale</li>
              <li>Website Development</li>
              <li>Marketing/Brand awareness</li>
              <li>Public presale</li>
              <li>Begin community building</li>
            </ul>
          </div>

          <div className="phase">
            <img alt="" src="/images/phase2.png" className="phase-header" />
            <ul>
              <li>Youtube video campaigns</li>
              <li>Coinflip beta launch</li>
              <li>First community airdrop</li>
              <li>Launch the raffle website</li>
              <li>Influencer marketing push</li>
              <li>Spin-the-wheel & lotto launch</li>
            </ul>
          </div>

          <div className="phase">
            <img alt="" src="/images/phase3.png" className="phase-header" />
            <ul>
              <li>Brand refresh</li>
              <li>Merch release</li>
              <li>Staking and farming launch</li>
              <li>Community giveaway and charity endeavors </li>
              <li>NFT release</li>
              <li>More games added to our website</li>
              <li>Launching our own swap</li>
              <li>LuckyDAO governance token launch</li>
              <li>Moon!</li>
              <li>So much rich degens</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section-5">
        <img alt="" src="/images/founders.png" className="founders-title" />

        <div className="founders-ctn">
          <div className="founder">
            <img alt="" src="/images/y2k-img.png" className="founder-img" />

            <img alt="" src="/images/y2k.png" className="founder-title y2k" />

            <img alt="" src="/images/y2k-desc.png" className="founder-desc" />
          </div>

          <div className="founder">
            <img alt="" src="/images/drdgn-img.png" className="founder-img" />

            <img alt="" src="/images/drdgn.png" className="founder-title" />

            <img alt="" src="/images/drdgn-desc.png" className="founder-desc" />
          </div>

          <div className="founder">
            <img alt="" src="/images/0xsappy-img.png" className="founder-img" />

            <img alt="" src="/images/0xsappy.png" className="founder-title" />

            <img alt="" src="/images/0xsap-desc.png" className="founder-desc" />
          </div>
        </div>
      </section>

      <footer>
        <p>made by degens for degens with🤍</p>
      </footer>

    </div>
  );
}

export default App;
