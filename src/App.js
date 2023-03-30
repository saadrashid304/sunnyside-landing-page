import React, { Fragment, useState } from "react";
import styles from "./App.module.css";
import Header from "./components/Header/Header";
import Description from "./components/Description/Description";
import ImageDescription from "./components/ImageDescription/ImageDescription";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import imageCherry from "./assets/desktop/image-graphic-design.jpg";
import imageOrange from "./assets/desktop/image-photography.jpg";
import imageEmily from "./assets/image-emily.jpg";
import imageThomas from "./assets/image-thomas.jpg";
import imageJennie from "./assets/image-jennie.jpg";
import facebook from "./assets/icon-facebook.svg";
import instagram from "./assets/icon-instagram.svg";
import pinterest from "./assets/icon-pinterest.svg";
import twitter from "./assets/icon-twitter.svg";
import facebook2 from "./assets/icon-facebook2.svg";
import instagram2 from "./assets/icon-instagram2.svg";
import pinterest2 from "./assets/icon-pinterest2.svg";
import twitter2 from "./assets/icon-twitter2.svg";

const App = () => {
  const [isHovering, setIsHovering] = useState(null);

  const handleFacebookMouseEnter = () => {
    setIsHovering("facebook");
  };

  const handleInstagramMouseEnter = () => {
    setIsHovering("instagram");
  };

  const handleTwitterMouseEnter = () => {
    setIsHovering("twitter");
  };

  const handlePinterestMouseEnter = () => {
    setIsHovering("pinterest");
  };

  const handleMouseLeave = () => {
    setIsHovering(null);
  };

  return (
    <Fragment>
      <Header />
      <div className={styles.container_one}>
        <Description
          title="Transform your brand"
          desc="We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you."
          color="yellow"
        />
        <div className={styles.image_container1} />
      </div>
      <div className={`${styles.container_one} ${styles.container_oneMedia}`}>
        <div
          className={`${styles.image_container1} ${styles.image_container2}`}
        />
        <Description
          title="Stand out to the right audience"
          desc="Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters. We,ll build and extend your brand in digital places."
          color="red"
        />
      </div>
      <div className={`${styles.container_one} ${styles.container_oneMedia}`}>
        <ImageDescription
          style={{
            backgroundImage: `url(${imageCherry})`,
          }}
          title="Graphic Design"
          desc="Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients' attention."
        />
        <ImageDescription
          style={{
            backgroundImage: `url(${imageOrange})`,
          }}
          title="Photography"
          desc="Increase your credibility by getting the most stunning, high-quality photos that improve your business image."
        />
      </div>
      <div className={styles.container_two}>
        <div className={styles.card_mainContainer}>
          <h2>CLIENT TESTIMONIALS</h2>
          <div className={styles.card_container}>
            <ProfileCard
              image={imageEmily}
              desc="We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit."
              name="Emily R."
              designation="Marketing Director"
            />
            <ProfileCard
              image={imageThomas}
              desc="Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience."
              name="Thomas S."
              designation="Cheif Operating Officer"
            />
            <ProfileCard
              image={imageJennie}
              desc="Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!"
              name="Jennie F."
              designation="Business Owner"
            />
          </div>
        </div>
      </div>
      <div className={`${styles.container_one} ${styles.container_oneWrap}`}>
        <div className={`${styles.image_container3}`} />
        <div
          className={`${styles.image_container3} ${styles.image_container4}`}
        />
        <div
          className={`${styles.image_container3} ${styles.image_container5}`}
        />
        <div
          className={`${styles.image_container3} ${styles.image_container6}`}
        />
      </div>
      <div className={styles.container_third}>
        <div className={styles.footer_container}>
          <h1>sunnyside</h1>
          <ul className={styles.footer_navLink}>
            <li>About</li>
            <li>Services</li>
            <li>Projects</li>
          </ul>
          <ul className={styles.footer_icons}>
            <li>
              <img
                src={isHovering === "facebook" ? facebook2 : facebook}
                alt=""
                className={styles.icon}
                onMouseEnter={handleFacebookMouseEnter}
                onMouseLeave={handleMouseLeave}
              />
            </li>
            <li>
              <img
                src={isHovering === "instagram" ? instagram2 : instagram}
                alt=""
                className={styles.icon}
                onMouseEnter={handleInstagramMouseEnter}
                onMouseLeave={handleMouseLeave}
              />
            </li>
            <li>
              <img
                src={isHovering === "twitter" ? twitter2 : twitter}
                alt=""
                className={styles.icon}
                onMouseEnter={handleTwitterMouseEnter}
                onMouseLeave={handleMouseLeave}
              />
            </li>
            <li>
              <img
                src={isHovering === "pinterest" ? pinterest2 : pinterest}
                alt=""
                className={styles.icon}
                onMouseEnter={handlePinterestMouseEnter}
                onMouseLeave={handleMouseLeave}
              />
            </li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

export default App;
