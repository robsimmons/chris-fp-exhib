import { Inter } from "next/font/google";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

const DATA = [
  {
    url: "https://editor.p5js.org/chrisamaphone/full/r8bLQ1HnK",
    prompt: "Glitch Art",
  },
  {
    url: "https://editor.p5js.org/chrisamaphone/full/942Nd9nOG",
    prompt: "Steal Like An Artist",
  },
  {
    url: "https://editor.p5js.org/chrisamaphone/full/pYxHJricW",
    prompt: "Sample a color palette from your favorite movie/album cover",
  },
  {
    url: "https://editor.p5js.org/chrisamaphone/full/DsddLGhll",
    prompt: "Plants",
  },
  {
    url: "https://editor.p5js.org/chrisamaphone/full/Sf_SNYaWJ",
    prompt: "Generative music (use headphones for sound)",
  },
  {
    url: "https://editor.p5js.org/chrisamaphone/full/3YJItdQaL",
    prompt: "Tessellation",
  },
  {
    url: "https://editor.p5js.org/chrisamaphone/full/4kcL8LkDp",
    prompt: "Something you’ve always wanted to learn (Voronoi tesselation)",
  },
  {
    url: "https://editor.p5js.org/chrisamaphone/full/suuOCH_D-",
    prompt: "Aesemic",
  },
  {
    url: "https://editor.p5js.org/chrisamaphone/full/2FrY30K-t",
    prompt: "Black and white",
  },
  {
    url: "https://editor.p5js.org/chrisamaphone/full/UJLDqGu6X",
    prompt: "More Moiré",
  },
  {
    url: "https://editor.p5js.org/chrisamaphone/full/FSRX1pVet",
    prompt: "Textile",
  },
  {
    url: "https://editor.p5js.org/chrisamaphone/full/-B7JKXzvI",
    prompt: "Yayoi Kusama",
  },
  {
    url: "https://editor.p5js.org/chrisamaphone/full/ep0ULCfMu",
    prompt: "Generative poetry",
  },
  {
    url: "https://editor.p5js.org/chrisamaphone/full/pl6LJSYfi",
    prompt: "Minimalism",
  },
  {
    url: "https://editor.p5js.org/chrisamaphone/full/4t4hca1yn",
    prompt:
      "Deliberately break one of your previous images, take one of your previous works and ruin it.",
  },
];

const RELOAD_TIME = 45000;

export default function Home() {
  const [n, setN] = React.useState(DATA.length);
  const [startTime, setStartTime] = React.useState(performance.now());
  const [time, setTime] = React.useState(performance.now());

  function onAnimationFrame() {
    setTime(performance.now());
    window.requestAnimationFrame(onAnimationFrame);
  }

  React.useEffect(() => {
    window.requestAnimationFrame(onAnimationFrame);
  }, []);

  const elapsed = time - startTime;
  if (elapsed > RELOAD_TIME) {
    setN(n + 1);
    setStartTime(time);
  }
  const width =
    elapsed > RELOAD_TIME ? 0 : (RELOAD_TIME - elapsed) / RELOAD_TIME;

  const item = DATA[n % DATA.length];

  return (
    <>
      <div
        style={{
          width: 1000,
          height: 3000,
          margin: "auto",
          marginTop: 10,
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div style={{ width: 600 }}>
          <button
            style={{ width: 75, height: 30, backgroundColor: "#333" }}
            onClick={() => {
              setN(n - 1);
              setStartTime(time);
            }}
          >
            Back
          </button>
          <button
            style={{ width: 75, height: 30, backgroundColor: "#333" }}
            onClick={() => {
              setN(n + 1);
              setStartTime(time);
            }}
          >
            Next
          </button>
          <button
            disabled
            style={{
              width: 450 * width,
              height: 30,
              backgroundColor: "#01eaea",
            }}
          >
            &nbsp;
          </button>

          <iframe
            key={n}
            style={{ width: 600, height: 640 }}
            src={item.url}
          ></iframe>
        </div>
        <div
          style={{ width: 400, fontSize: 20, paddingTop: 30, paddingLeft: 20 }}
        >
          <p>
            These generative artworks were made for Genuary 2023
            (https://genuary.art/), an online community challenge to respond to
            a different generative art prompt each day in the month of January
          </p>
          <p style={{ paddingTop: 20 }}>PROMPT: {item.prompt}</p>
        </div>
      </div>
    </>
  );
}
