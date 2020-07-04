import { Router } from 'express';
import { getRepository, getCustomRepository } from 'typeorm';
import Discipline from '../models/Discipline';
import DisciplineRepository from '../repositories/DisciplineRepository';

const disciplineRouter = Router();

disciplineRouter.post('/', async (request, response) => {
  try {
    const repo = getRepository(Discipline);
    const res = await repo.save(request.body);
    return response.status(201).json(res);
  } catch (err) {
    console.log('err.message :>> ', err.message);
    return response.status(400).send();
  }
});

disciplineRouter.get('/', async (request, response) => {
  response.json(await getRepository(Discipline).find());
});

disciplineRouter.get('/:name', async (request, response) => {
  const repository = getCustomRepository(DisciplineRepository);
  const res = await repository.findByName(request.params.name);
  response.json(res);
});

export default disciplineRouter;
