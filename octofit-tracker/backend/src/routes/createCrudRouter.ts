import { Router } from 'express';
import { Model } from 'mongoose';

export function createCrudRouter(model: Model<unknown>) {
  const router = Router();

  router.get('/', async (_request, response) => {
    const items = await model.find();
    response.json(items);
  });

  router.post('/', async (request, response) => {
    const item = await model.create(request.body);
    response.status(201).json(item);
  });

  router.get('/:id', async (request, response) => {
    const item = await model.findById(request.params.id);

    if (!item) {
      response.status(404).json({ message: 'Resource not found' });
      return;
    }

    response.json(item);
  });

  router.put('/:id', async (request, response) => {
    const item = await model.findByIdAndUpdate(request.params.id, request.body, {
      new: true,
      runValidators: true,
    });

    if (!item) {
      response.status(404).json({ message: 'Resource not found' });
      return;
    }

    response.json(item);
  });

  router.delete('/:id', async (request, response) => {
    const item = await model.findByIdAndDelete(request.params.id);

    if (!item) {
      response.status(404).json({ message: 'Resource not found' });
      return;
    }

    response.status(204).send();
  });

  return router;
}