import React from "react";
import LineChart from "../Graph/LineGraph";

import {
  WeatherInfoContainer,
  InfoTitle,
  InfoContainer,
  InfoItemTitle,
  InfoItemDate,
  InfoItemItem,
} from "./WeatherInfo.style";

function WeatherInfo({ areaName }) {
  return (
    <div>
      <WeatherInfoContainer>
        <InfoTitle>{areaName}의 날씨 정보</InfoTitle>
        <InfoContainer>
          <InfoItemTitle>기온</InfoItemTitle>
          <InfoItemDate>
            <span>2021.10.06</span>
            <span>섭씨 (°C)</span>
          </InfoItemDate>
          <InfoItemItem>
            <LineChart></LineChart>
          </InfoItemItem>
        </InfoContainer>
        <InfoContainer>
          <InfoItemTitle>강수</InfoItemTitle>
          <InfoItemDate>
            <span>2021.10.06</span>
            <span>확률 (%)</span>
          </InfoItemDate>
          <InfoItemItem>
            <LineChart bar={true}></LineChart>
          </InfoItemItem>
        </InfoContainer>
        <InfoContainer>
          <InfoItemTitle>습도</InfoItemTitle>
          <InfoItemDate>
            <span>2021.10.06</span>
            <span>상대습도 (%)</span>
          </InfoItemDate>
          <InfoItemItem></InfoItemItem>
        </InfoContainer>
      </WeatherInfoContainer>
    </div>
  );
}

export default WeatherInfo;