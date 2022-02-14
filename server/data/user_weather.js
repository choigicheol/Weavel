const { user_weather } = require("../models");

async function createUserWeather(userId, weatherId) {
  return user_weather.create({ userId, weatherId });
}

async function deleteUserWeather(userId) {
  return user_weather.destroy({ where: { userId: userId } });
}

async function putUserWeather(userId, weatherId) {
  return user_weather.update(
    { weatherId: weatherId },
    { where: { userId: userId } },
  );
}

async function likeWeatherCount() {
  const a = await user_weather.count({
    where: { weatherId: 1 },
  });
  const b = await user_weather.count({
    where: { weatherId: 2 },
  });
  const c = await user_weather.count({
    where: { weatherId: 3 },
  });
  const d = await user_weather.count({
    where: { weatherId: 4 },
  });
  return { 0: a, 1: b, 2: c, 3: d };
}

module.exports = {
  createUserWeather,
  deleteUserWeather,
  putUserWeather,
  likeWeatherCount,
};