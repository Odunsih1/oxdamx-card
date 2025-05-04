"use client";
import React from "react";
import { SocialIcon } from "react-social-icons";
import HexagonalAvatar from "./HexagonalAvater";

const ProfileCard = () => {
  return (
    <div className="profile-card">
      <div className="starfield"></div>

      <div className="profile-card-inner glass-card">
        <div className="profile-card-pattern crypto-pattern"></div>
        <div className="profile-card-content">
          <div className="profile-card-header">
            <div className="profile-card-avatar">
              <HexagonalAvatar
                src="https://pbs.twimg.com/profile_images/1918655697195024384/NA4MvPdv_400x400.jpg"
                alt="Oxdamx Profile"
                size="lg"
              />
            </div>
            <h1 className="profile-card-name flex">
              DamX{" "}
              <img
                width={25}
                src="https://pbs.twimg.com/profile_images/1773986733165535232/RcsSuUR5_400x400.jpg"
                alt="notcoin"
              />
            </h1>
            <p className="profile-card-username crypto-code">@Oxdamx</p>
            <div className="profile-card-tagline">
              <p>
                Crypto Maxi • Degen • OG{" "}
                <a
                  className="text-blue-400"
                  href="https://x.com/ton_blockchain"
                >
                  @Ton_Blockchain
                </a>{" "}
                • Contributor{" "}
                <a className="text-blue-400" href="https://x.com/thenotcoin">
                  @TheNotcoin
                </a>{" "}
                • Architect{" "}
                <a className="text-blue-400" href="https://x.com/TonNomads">
                  @TonNomads
                </a>{" "}
                <a className="text-blue-400" href="https://x.com/TonNigeria">
                  @TonNigeria
                </a>
                • Part-time Memer • DYOR
              </p>
            </div>
          </div>
          <div className="profile-card-bio">
            <div className="profile-card-bio-pattern crypto-pattern"></div>
            <div className="profile-card-bio-content">
              <h2 className="profile-card-bio-title">
                <span className="profile-card-bio-pulse"></span>
                Bio
              </h2>
              <p className="profile-card-bio-text">
                Crypto enthusiast | Blockchain explorer | Digital nomad
              </p>
            </div>
          </div>
          <div className="profile-card-social">
            <a
              href="https://x.com/0xdamx"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X"
              className="social-link X"
            >
              <SocialIcon
                network="x"
                style={{ width: "1.5rem", height: "1.5rem" }}
                className="social-icon"
              />
            </a>
            <a
              href="https://t.co/OeCvg0LCbF"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
              className="social-link telegram"
            >
              <SocialIcon
                network="telegram"
                style={{ width: "1.5rem", height: "1.5rem" }}
                className="social-icon"
              />
            </a>
          </div>
          <div className="profile-card-footer">
            <div className="profile-card-crypto-hint crypto-code">
              <span></span>
              <span className="crypto-orange">
                <a href="https://t.co/7IrBJ17oHl">TonNomads</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
