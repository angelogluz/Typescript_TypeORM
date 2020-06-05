import { Router } from 'express';
import classRouter from './class.routes';
import lessonRouter from './lesson.routes';

const routes = Router();

routes.use('/class', classRouter);
routes.use('/lesson', lessonRouter);
routes.use('/student', lessonRouter);
routes.use('/content', lessonRouter);

export default routes;
