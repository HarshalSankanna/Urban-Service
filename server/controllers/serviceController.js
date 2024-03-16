import Service from "../models/serviceModel.js";

export const createService = async (request, response) => {
  try {
    if (
      !request.body.serviceName ||
      !request.body.description ||
      !request.body.price
    ) {
      return response.status(400).send({
        message: "Send all required fields",
      });
    }
    const newService = {
      serviceName: request.body.serviceName,
      description: request.body.description,
      price: request.body.price,
    };
    const service = await Service.create(newService);
    return response.status(201).send(service);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
};

export const getServices = async (request, response) => {
  try {
    const services = await Service.find({});
    return response.status(200).json({
      count: services.length,
      data: services,
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
};

export const getServiceById = async (request, response) => {
  try {
    const { id } = request.params;

    const service = await Service.findById(id);

    return response.status(200).json(service);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
};
