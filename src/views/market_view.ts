import Market from "../models/Market";
import imagesView from "./images_view";

export default {
  render(market: Market) {
    return {
      id: market.id,
      name: market.name,
      latitude: market.latitude,
      longitude: market.longitude,
      about: market.about,
      days_is_opening: market.days_is_opening,
      images: imagesView.renderMany(market.images),
    };
  },

  renderMany(market: Market[]) {
    return market.map((market) => this.render(market));
  },
};
