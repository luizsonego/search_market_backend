import { Request, Response } from "express";
import { getRepository } from "typeorm";
import * as Yup from "yup";
import Market from "../models/Market";
import MarketView from "../views/market_view";

export default {
  async create(request: Request, response: Response) {
    const { name, latitude, longitude, about, days_is_opening } = request.body;

    const marketRepository = getRepository(Market);

    const requestImages = request.files as Express.Multer.File[];
    const images = requestImages.map((image) => {
      return { path: image.filename };
    });

    const data = {
      name,
      latitude,
      longitude,
      about,
      days_is_opening,
      images,
    };

    const schema = Yup.object().shape({
      name: Yup.string().required(),
      latitude: Yup.number().required(),
      longitude: Yup.number().required(),
      about: Yup.string().required().max(300),
      days_is_opening: Yup.string().required(),
      images: Yup.array(
        Yup.object().shape({
          path: Yup.string(),
        })
      ),
    });

    await schema.validate(data, {
      abortEarly: false,
    });

    const market = marketRepository.create(data);

    await marketRepository.save(market);

    return response.status(201).json(market);
  },

  async index(request: Request, response: Response) {
    const marketRepository = getRepository(Market);

    const market = await marketRepository.find({
      relations: ["images"],
    });

    return response.json(MarketView.renderMany(market));
  },

  async show(request: Request, response: Response) {
    const { id } = request.params;
    const marketRepository = getRepository(Market);

    const market = await marketRepository.findOneOrFail(id, {
      relations: ["images"],
    });

    return response.json(MarketView.render(market));
  },
};
