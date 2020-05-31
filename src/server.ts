import dotenv from 'dotenv';
import app from './app';
import 'reflect-metadata';
import './database';

dotenv.config();

app.listen(process.env.PORT || 3000, () => {
  console.log('🏃 Running Server');
});
