import { Router } from 'express';
import { getRepository } from 'typeorm';
import Content from '../models/Content';

const contentRouter = Router();

contentRouter.post('/', async (request, response) => {
  try {
    const repo = getRepository(Content);
    const res = await repo.save(request.body);
    return response.status(201).json(res);
  } catch (err) {
    console.log('err.message :>> ', err.message);
    return response.status(400).send();
  }
});

contentRouter.get('/', async (request, response) => {
  response.json(await getRepository(Content).find());
});

export default contentRouter;
