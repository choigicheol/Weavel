import React, { useEffect, useRef, useState } from "react";
import SearchDetail from "../SearchDetail/SearchDetail";
import SearchInfo from "../SearchInfo/SearchInfo";
import MapIndex from "../Map/MapIndex";
import {
  SearchContainer,
  SelectContainer,
  SelectBoxContainer,
  SelectBox,
  SelectContents,
  WeatherSelectContainer,
} from "./WeatherSearch.style";

function WeatherSearch({
  isShowWeatherInfo,
  searchWeatherHandle,
  changeAreaHandle,
  getSearchHandle,
  nowWeather,
  dateTime,
  weatherColor,
}) {
  const [isActivation, setIsActivation] = useState({ isOpen: false, isLender: false });

  const activationHandle = () => {
    const isOpen = { ...isActivation };
    isOpen.isOpen = !isActivation.isOpen;
    isOpen.isLender = false;
    setIsActivation(isOpen);
    searchWeatherHandle(false);
  };

  const [selectTitle, setSelectTitle] = useState({
    weather: "날씨를 선택하세요",
    day: "날짜를 선택하세요",
    time: "시간을 선택하세요",
    area: "지역을 선택하세요",
  });

  const [showArea, setShowArea] = useState(null);

  const showAreaHandle = (idx) => {
    setShowArea(idx);
  };

  return (
    <SearchContainer>
      <WeatherSelectContainer isActivation={isActivation}>
        <SelectContainer isActivation={isActivation.isOpen} onClick={() => activationHandle()}>
          <SelectBoxContainer>
            <SelectBox>
              <span>날씨</span>
              <SelectContents>{selectTitle.weather}</SelectContents>
            </SelectBox>
            <SelectBox>
              <span>날짜</span>
              <SelectContents>{selectTitle.day}</SelectContents>
            </SelectBox>
            <SelectBox>
              <span>시간</span>
              <SelectContents>{selectTitle.time}</SelectContents>
            </SelectBox>
            <SelectBox line={"none"}>
              <span>지역</span>
              <SelectContents>{selectTitle.area}</SelectContents>
            </SelectBox>
          </SelectBoxContainer>
        </SelectContainer>
        {isActivation.isLender ? (
          <MapIndex
            isShowWeatherInfo={isShowWeatherInfo}
            searchWeatherHandle={searchWeatherHandle}
            showArea={showArea}
            changeAreaHandle={changeAreaHandle}
            nowWeather={nowWeather}
            weatherColor={weatherColor}
          />
        ) : isActivation.isOpen ? (
          <SearchDetail
            setSelectTitle={setSelectTitle}
            selectTitle={selectTitle}
            setIsActivation={setIsActivation}
            showAreaHandle={showAreaHandle}
            getSearchHandle={getSearchHandle}
            dateTime={dateTime}
          />
        ) : (
          <SearchInfo />
        )}
      </WeatherSelectContainer>
    </SearchContainer>
  );
}

export default WeatherSearch;