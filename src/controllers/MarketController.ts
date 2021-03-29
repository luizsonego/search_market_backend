import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import * as Yup from 'yup'
import Market from '../entity/Market'
import MarketView from '../views/market_view'

export default {
  async create (request: Request, response: Response) {
    const {
      name,
      latitude,
      longitude,
      about,
      sunday,
      sunStart,
      sunEnd,
      monday,
      monStart,
      monEnd,
      tuesday,
      tueStart,
      tueEnd,
      wednesday,
      wedStart,
      wedEnd,
      thursday,
      thuStart,
      thuEnd,
      friday,
      friStart,
      friEnd,
      saturday,
      satStart,
      satEnd
    } = request.body

    const marketRepository = getRepository(Market)

    // const requestImages = request.files as Express.Multer.File[]
    // const images = requestImages.map((image) => {
    //   return { path: image.filename }
    // })

    const data = {
      name,
      latitude,
      longitude,
      about,
      sunday,
      sunStart,
      sunEnd,
      monday,
      monStart,
      monEnd,
      tuesday,
      tueStart,
      tueEnd,
      wednesday,
      wedStart,
      wedEnd,
      thursday,
      thuStart,
      thuEnd,
      friday,
      friStart,
      friEnd,
      saturday,
      satStart,
      satEnd
    }

    const schema = Yup.object().shape({
      name: Yup.string().required(),
      latitude: Yup.number().required(),
      longitude: Yup.number().required(),
      about: Yup.string().required().max(300),
      sunday: Yup.string(),
      sunStart: Yup.string(),
      sunEnd: Yup.string(),
      monday: Yup.string(),
      monStart: Yup.string(),
      monEnd: Yup.string(),
      tuesday: Yup.string(),
      tueStart: Yup.string(),
      tueEnd: Yup.string(),
      wednesday: Yup.string(),
      wedStart: Yup.string(),
      wedEnd: Yup.string(),
      thursday: Yup.string(),
      thuStart: Yup.string(),
      thuEnd: Yup.string(),
      friday: Yup.string(),
      friStart: Yup.string(),
      friEnd: Yup.string(),
      saturday: Yup.string(),
      satStart: Yup.string(),
      satEnd: Yup.string(),
      images: Yup.array(
        Yup.object().shape({
          path: Yup.string()
        })
      )
    })

    await schema.validate(data, {
      abortEarly: false
    })

    const market = marketRepository.create(data)

    await marketRepository.save(market)

    return response.status(201).json(market)
  },

  async index (request: Request, response: Response) {
    const marketRepository = getRepository(Market)

    const market = await marketRepository.find()

    return response.json(MarketView.renderMany(market))
  },

  async show (request: Request, response: Response) {
    const { id } = request.params
    const marketRepository = getRepository(Market)

    const market = await marketRepository.findOneOrFail(id)

    return response.json(MarketView.render(market))
  }
}
