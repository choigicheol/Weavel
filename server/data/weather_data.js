const { weather_data } = require("../models");
const { Sequelize } = require("sequelize");
const { or, and, gt, lt } = Sequelize.Op;

async function createCityWeatherData(
  nxFindXML,
  nyFindXML,
  cityId,
  dateFindXML,
  timeFindXML,
  categoryFindXML,
  valueFindXML,
) {
  await weather_data.create({
    city: cityId,
    nx: nxFindXML,
    ny: nyFindXML,
    date: dateFindXML,
    time: timeFindXML,
    category: categoryFindXML,
    value: valueFindXML,
  });
}

function deleteCityWeatherData(cityId) {
  weather_data.destroy({ where: { city: cityId } });
}

function deleteAreaWeatherData(nx, ny) {
  weather_data.destroy({ where: { nx: nx, ny: ny } });
}

function countAreaWeatherData(cityId, nx, ny) {
  return weather_data.count({
    distinct: true,
    where: { city: cityId, nx: nx, ny: ny },
  });
}

async function filterTmpPopReh(nxCoordinate, nyCoordinate) {
  return weather_data.findAll({
    where: {
      nx: nxCoordinate,
      ny: nyCoordinate,
      [or]: [{ category: "TMP" }, { category: "POP" }, { category: "REH" }],
      // POP 강수확률, REH 습도, TMP 1시간 기온
    },
  });
}

async function fillterSkyPty(
  cityCode,
  dateCode8,
  timeCode4,
  skyValueCode,
  ptyValueCode,
) {
  //  SKY 하늘상태 PTY 강수형태
  return weather_data.findAll({
    where: {
      city: cityCode,
      date: dateCode8,
      time: timeCode4,
      [or]: [
        { [and]: [{ category: "SKY" }, { [or]: { value: skyValueCode } }] },
        { [and]: [{ category: "PTY" }, { [or]: { value: ptyValueCode } }] },
      ],
    },
  });
}

module.exports = {
  createCityWeatherData,
  deleteCityWeatherData,
  deleteAreaWeatherData,
  countAreaWeatherData,
  filterTmpPopReh,
  fillterSkyPty,
};