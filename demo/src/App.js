import "./App.css";
import React from "react";
import FlareIcon from '@mui/icons-material/Flare';
import { Button } from "@mui/material";
import NTHULOGO from "./NTHU.png";
import IMTLABLOGO from "./IMTLAB.png";
import background_machine from "./background_machine.jpg";
import background_machine_outside from "./background_machine_outside.jpg";
import ReactPlayer from "react-player";

const useHooks = () => {
  const [language, setLanguage] = React.useState("繁體中文");
  const [open, setOpen] = React.useState(true);

  const handleLanguage = (e) => {
    setLanguage(e.target.value);
    setOpen(false);
    console.log(e.target.value);
  };

  const CommonButton = ({ children }) => (
    <Button
      variant="contained"
      onClick={handleLanguage}
      value={children}
      style={{
        width: "80%",
        margin: "10px auto 0 auto",
      }}
    >
      {children}
    </Button>
  );

  const AlertModel = () => {
    return (
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.9)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "50%",
            height: "40%",
            backgroundColor: "white",
            borderRadius: "10px",
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}>
              <h2>請選擇語言</h2>
              <h3 style={{
                textAlign: "center",
              }}>
                Please choose language
              </h3>
            </div>
            <p></p>
          </div>
          <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between"
          }}>
            <CommonButton>繁體中文</CommonButton>
            <CommonButton>English</CommonButton>
          </div>
        </div>
      </div>
    );
  };

  const CommonPlayer = ({ url }) => (
    <div
      className="video-container-rwd"
    >
      <ReactPlayer
        className="video-rwd"
        url={url}
        controls
        width="80%"
        height="60%"
      />
    </div>
  );

  const CommonSpan = ({ children }) => (
    <span
      style={{
        fontSize: "16px",
        margin: "10px 0 0 0",
        fontWeight: 500,
      }}
    >
      {children}
    </span>
  );

  const COmmonSpanWidth = ({ children }) => (
    <span
      style={{
        fontSize: "16px",
        margin: "5px",
        width: "100%",
        textAlign: "center"
      }}
    >
      {children}
    </span>
  );

  const Footer = () => {
    return (
      <div className="footer-rwd">
        <div className="footer-above">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              minWidth: "33%"
            }}
          >
            <img 
              src={NTHULOGO}
              alt="NTHULOGO"
              style={{
                width: "200px",
                marginBottom: "10px",
              }}
            />
          <img 
              src={IMTLABLOGO}
              alt="IMTLABLOGO"
              style={{
                width: "200px",
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              minWidth: "33%"
            }}
          >
            <span className="footer-span-small-rwd">教授 (Prof.)</span>
            <CommonSpan>李明蒼, Ming-Tsang Lee</CommonSpan>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              minWidth: "33%"
            }}
          >
            <span className="footer-span-small-rwd">學生 (Student)</span>
            <CommonSpan>吳承穎, Daniel Wu </CommonSpan>
            <CommonSpan>黃毓勛, Austin Huang</CommonSpan>
            <CommonSpan>高尚祐, Sam Gao</CommonSpan>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            fontSize: "14px",
            marginTop: "10px",
          }}
        >
          <COmmonSpanWidth>E-mail: mtlee(a)pme.nthu.edu.tw</COmmonSpanWidth>
          <COmmonSpanWidth>Office tel number: 03-5742497</COmmonSpanWidth>
          <COmmonSpanWidth>Lab tel number: 03-5715131#33733</COmmonSpanWidth>
        </div>
      </div>
    );
  };

  return {
    AlertModel,
    open,
    language,
    Footer,
    CommonPlayer
  };
};

const App = () => {
  const { AlertModel, open, language, Footer, CommonPlayer } = useHooks();

  return (
    <div
      style={{
        overflowX: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        minHeight: "100vh"
      }}
    >
      <img
        src={background_machine}
        alt="machine"
        style={{
          position: "fixed",
          width: "100%",
          top: 0,
          left: 0,
          zIndex: -1,
          opacity: 0.1,
        }}
      />
      <img
        src={background_machine_outside}
        alt="machine"
        style={{
          position: "fixed",
          width: "100%",
          bottom: 0,
          right: 0,
          zIndex: -2,
          opacity: 0.05,
        }}
      />
      <div
        className="App"
        style={{
          width: "100%",
        }}
      >
        {language === "繁體中文" ? (
          <>
            <h1
            style={{
              marginTop: 0,
              padding: "20px",
            }}
            >
              <FlareIcon />大氣電漿雷射輔助製程暨數位應用
            </h1>
            <h2>
              簡介
            </h2>
            <p
              style={{
                width: "85%",
                margin: "auto",
                textAlign: "left",
                lineHeight: "2",
              }}
            >
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;本計畫為大氣電漿雷射輔助製程，與其之數位應用，在製程上，我們使用的是氧化鋅摻鎵(GZO)來鍍膜，相對以往鍍膜時大部分會利用真空環境來做鍍膜，我們則是在常溫常壓下進行，配合雷射應用，在鍍膜時同時使用雷射掃線，可以使掃線的位置因溫度高的關係加強反應，最後在樣品的雷射行進位置產生出相對應的線條或圖形，而這個就是我們的透明度高且具有電阻值的導線。
            </p>
            <p
              style={{
                width: "85%",
                margin: "auto",
                textAlign: "left",
                lineHeight: "2",
              }}
            >
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在使用中，結合HoloLens 2可以進一步的觀測我們的製程狀況以及樣品，並且可以達到遠端的效果，可以不用在現場就可以操作機台，在數位化的現今，往往少不了數位化發展，利用展示的方式可以讓我們知道遠端操作機台是可行的，且幾乎可以讓自己好像身處現場，點擊按鈕及調整參數就像是在現場一樣簡單。
            </p>
            <h2>
              影片展示
            </h2>
            <CommonPlayer url={require('./introduction.mp4')} />
            <h2>
              製作過程
            </h2>
            <CommonPlayer url={require('./Future_TECH.mp4')} />
          </>
        ) : (
          <>
          <h1
            style={{
              marginTop: 0,
              padding: "20px",
            }}
            >
              <FlareIcon />Atmospheric Plasma Laser-Assisted Processing and Digital Applications
            </h1>
            <h2>
              Introduction
            </h2>
            <p
              style={{
                width: "85%",
                margin: "auto",
                textAlign: "left",
                lineHeight: "2",
              }}
            >
              This project focuses on atmospheric plasma laser-assisted processing and its digital applications. In the process, we use gallium-doped zinc oxide (GZO) for coating. Unlike traditional coating methods that mostly utilize a vacuum environment, our approach operates at room temperature and pressure. By integrating laser application, the laser scanning performed during the coating process enhances reactions at the scanned locations due to higher temperatures, resulting in lines or patterns on the sample where the laser has passed. These lines or patterns are the conductive tracks we produce, which are transparent and have specific resistive values.
            </p>
            <p
              style={{
                width: "85%",
                margin: "auto",
                textAlign: "left",
                lineHeight: "2",
              }}
            >
              In use, integrating the HoloLens 2 allows us to further monitor our processing conditions and samples, achieving remote capabilities. This enables machine operation without being physically present on site. In today's digital age, digital development is essential. By using demonstration methods, we can see that remote operation of machinery is feasible and almost makes it feel as though we are present at the site. Clicking buttons and adjusting parameters is as straightforward as if we were there in person.
            </p>
            <h2>
              Application Demonstration
            </h2>
            <CommonPlayer url={require('./introduction.mp4')} />
            <h2>
              Manufacturing Process
            </h2>
            <CommonPlayer url={require('./Future_TECH.mp4')} />
          </>
        )}
      </div>
      {open && <AlertModel />}
      <Footer />
    </div>
  );
}

export default App;
