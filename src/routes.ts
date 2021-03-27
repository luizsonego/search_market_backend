import { Router } from "express";
import multer from "multer";
import multerConfig from "./config/multer";
import MarketController from "./controllers/MarketController";

const routes = Router();
const upload = multer(multerConfig);

routes.get('/market', MarketController.index)
routes.get('/market/:id', MarketController.show)
routes.post('/market', upload.array('images'), MarketController.create)


export default routes