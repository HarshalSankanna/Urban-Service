import express from "express";
import {
  createService,
  getServices,
  getServiceById,
} from "../controllers/serviceController.js";

const serviceRouter = express.Router();

//post service
serviceRouter.post("/service", createService);

//get all services
serviceRouter.get("/service", getServices);

//get service by id
serviceRouter.get("/service/:id", getServiceById);

export default serviceRouter;
