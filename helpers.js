const md5 = require("md5");
const { default: axios } = require("axios");

async function getMarvelCharacterData() {
  const ts = new Date().getTime();

  const md5Digest = md5(
    ts + process.env.MARVEL_PRIVATE_API + process.env.MARVEL_PUBLIC_API
  );

  const url = `http://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${process.env.MARVEL_PUBLIC_API}&hash=${md5Digest}`;

  try {
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  getMarvelCharacterData,
};