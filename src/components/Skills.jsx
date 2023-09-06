import React from "react";
import styled, { keyframes, css } from "styled-components";

function App() {
  const row1 = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/MERN-logo.png/800px-MERN-logo.png?20200328184328",
    "https://res.cloudinary.com/practicaldev/image/fetch/s--uJjgTz8I--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/8k73hi03ck8mnm830xpu.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/394px-Nextjs-logo.svg.png?20230404233503",
    "https://positivethinking.tech/wp-content/uploads/2021/01/Logo-Vuejs.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/AngularJS_logo.svg/695px-AngularJS_logo.svg.png?20161015100937",
  ];

  const row2 = [
    "https://cdn.dribbble.com/users/1198445/screenshots/15064463/media/1738239ed2bd20ca33d57c0ba5b82072.png?compress=1&resize=768x576&vertical=top",
    "https://miro.medium.com/v2/resize:fit:720/format:webp/0*CBjisl422hUyLxiG.png",
    "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-ar21.svg",
    "https://storage.googleapis.com/cms-storage-bucket/c823e53b3a1a7b0d36a9.png",
    "https://openupthecloud.com/wp-content/uploads/2020/01/Golang.png?ezimgfmt=rs%3Adevice%2Frscb2-1",
  ];

  return (
    <div className="w-full bg-white py-16 px-4">
    <AppContainer>
      <Wrapper>
        <h1 className="md:text-4xl text-[#00df9a] font-bold">Top Trending SKills</h1>
        <p className="md:text-2xl text-xl font-bold text-gray-600">Blockchain powered freelancing platform</p>
        <Marquee>
          <MarqueeGroup>
            {row1.map((el) => (
              <ImageGroup>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup>
          <MarqueeGroup>
            {row1.map((el) => (
              <ImageGroup>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup>
        </Marquee>
        <Marquee>
          <MarqueeGroup2>
            {row2.map((el) => (
              <ImageGroup>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup2>
          <MarqueeGroup2>
            {row2.map((el) => (
              <ImageGroup>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup2>
        </Marquee>
      </Wrapper>
    </AppContainer>
    </div>
  );
}

export default App;

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  color: #000000;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Text = styled.div`
  font-size: 35px;
  font-weight: 500;
  margin-bottom: 10px;
  color: #02203c;
`;

const Note = styled.div`
  font-size: 18px;
  font-weight: 200;
  margin-bottom: 40px;
  color: #7c8e9a;
`;

const Marquee = styled.div`
  display: flex;
  width: 1200px;
  overflow: hidden;
  user-select: none;
  mask-image: linear-gradient(
    to right,
    hsl(0 0% 0% / 0),
    hsl(0 0% 0% / 1) 10%,
    hsl(0 0% 0% / 1) 90%,
    hsl(0 0% 0% / 0)
  );
`;

const scrollX = keyframes`
  from {
    left: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const common = css`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  white-space: nowrap;
  width: 100%;
  animation: ${scrollX} 30s linear infinite;
`;

const MarqueeGroup = styled.div`
  ${common}
`;
const MarqueeGroup2 = styled.div`
  ${common}
  animation-direction: reverse;
  animation-delay: -3s;
`;

const ImageGroup = styled.div`
  display: grid;
  place-items: center;
  width: clamp(10rem, 1rem + 40vmin, 30rem);
  padding: calc(clamp(10rem, 1rem + 30vmin, 30rem) / 10);
`;

const Image = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
  /* border: 1px solid black; */
  border-radius: 0.5rem;
  aspect-ratio: 16/9;
  padding: 5px 20px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;