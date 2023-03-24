import { Store } from "../core/template";
import animalStore from "./animal";

const store = new Store({
  url: "",
  description: "",
});

export default store;
export const searchPicture = async (speices) => {
  try {
    const url = `https://api.unsplash.com/search/photos?query=${speices}&per_page=15&client_id=J7-qkB0K9h5acCnGf00JbHlBLrQJ-7TZXShKQ9lq5G8`;
    const res = await fetch(url);
    const { results } = await res.json();
    const ranNum = Math.floor(Math.random() * 15);
    store.state.url = results[ranNum].urls.regular;
    if (!results[ranNum].description) {
      store.state.description = `Hello~ ${results[ranNum].alt_description}`;
    } else {
      if (results[ranNum].description.length > 30) {
        store.state.description = results[ranNum].description.slice(0, 30);
      } else {
        store.state.description = results[ranNum].description;
      }
    }
  } catch (error) {
    console.log("Error:", error);
  }
};
