import React, { useState } from "react";
import styled, { css, keyframes } from "styled-components";
import ComentContainer from "./ComentContainer";
import NotifyBox from "./NotifyBox";

const MainContent = ({ coments, setComents }) => {
  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState(0);
  const [showWindow, setShowWindow] = useState(false);

  const handleLikeButtonClick = () => {
    if (liked) {
      setLiked(false);
      setCount(count - 1);
    } else {
      setLiked(true);
      setCount(count + 1);
    }
  };

  const showNotifyWindow = () => {
    setShowWindow(!showWindow);
  };

  return (
    <>
      <ContentTitle>뭘봐</ContentTitle>
      <Wrapper1>
        <ProfileWrapper>
          <ProfileImg src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxOTExMDlfNjMg%2FMDAxNTczMjI4MDg1MDkx.RVmiYNHzjQ8YU_aJ44hV0br18NTrJqUPnx1rbLchuEEg.DCk3wfZj59hS9HKJKn3u1yM34S_iflVSj__XGU__QH8g.JPEG.jane1112%2Ff132149948843548000%25280%2529.jpg&type=sc960_832" />
          <NameTimeWrapper>
            <ProfileName>보노보노</ProfileName>
            <TimeText>2023-08-10 12:31</TimeText>
          </NameTimeWrapper>
        </ProfileWrapper>
        <NotifyWrapper>
          <Notify onClick={showNotifyWindow}>! 신고</Notify>
        </NotifyWrapper>
      </Wrapper1>
      <Wrapper2>
        {showWindow && <NotifyBox setShowWindow={setShowWindow} />}
        <ContentTextWrapper>
          <ContentText>어쩌라고</ContentText>
        </ContentTextWrapper>
        <ContentImgWrapper>
          <ContentImg src="https://cdn.idjnews.kr/news/photo/202003/120152_80356_3733.png" />
        </ContentImgWrapper>
        {/* <LikeWrapper>
          <LikeButton>좋아요 4</LikeButton>
        </LikeWrapper> */}
        <VeryLikeWrapper>
          <VeryLikeButton liked={liked} onClick={handleLikeButtonClick}>
            {liked ? "취소" : "좋아요"} {count}
          </VeryLikeButton>
        </VeryLikeWrapper>
      </Wrapper2>
      <ComentContainer coments={coments} setComents={setComents} />
    </>
  );
};

const ContentTitle = styled.div`
  color: #393939;
  font-size: 30px;
  font-family: "Segoe UI", sans-serif;
`;

const Wrapper1 = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #c1bdbd;
`;

const ProfileWrapper = styled.div`
  display: flex;
`;

const ProfileImg = styled.img`
  width: 56px;
  height: 56px;
  border-radius: 8%;
`;

const NameTimeWrapper = styled.div`
  padding-left: 10px;
`;

const ProfileName = styled.div`
  color: #686a6b;
  font-size: 21px;
  font-family: "Segoe UI", sans-serif;
  height: 50%;
  display: flex;
  align-items: center;
`;

const TimeText = styled.div`
  color: #a7a7a7;
  font-size: 17px;
  font-family: "Segoe UI", sans-serif;
  height: 50%;
  display: flex;
  align-items: center;
`;

const NotifyWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
`;

const Notify = styled.button`
  color: #7b7c7d;
  font-size: 21px;
  font-family: "Segoe UI", sans-serif;
`;

const Wrapper2 = styled.div``;

const ContentTextWrapper = styled.div`
  padding-top: 10px;
`;

const ContentText = styled.div`
  color: #393939;
  font-size: 21px;
  font-family: "Segoe UI", sans-serif;
`;

const ContentImgWrapper = styled.div`
  padding-top: 10px;
  display: flex;
  justify-content: center;
`;

const ContentImg = styled.img`
  max-width: 100%;
  max-height: 400px;
`;

const LikeWrapper = styled.div`
  padding-top: 10px;
  display: flex;
  justify-content: center;
`;

const LikeButton = styled.button`
  width: 157px;
  height: 59px;
  background-color: #adb0b7;
  border-radius: 11px;
  color: #ffffff;
  font-size: 21px;
  font-family: "Segoe UI", sans-serif;
`;

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
`;

const VeryLikeButton = styled.button`
  width: 157px;
  height: 59px;
  background-color: ${({ liked }) => (liked ? "#8D9BE2" : "#adb0b7")};
  border-radius: 11px;
  color: #ffffff;
  font-size: 21px;
  font-family: "Segoe UI", sans-serif;
  animation: ${({ liked }) =>
    liked &&
    css`
      ${pulse} 0.5s linear
    `};
`;

const VeryLikeWrapper = styled.div`
  padding-top: 10px;
  display: flex;
  justify-content: center;
`;

export default MainContent;
