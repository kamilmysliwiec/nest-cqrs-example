import './vendor';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import { NestFactory } from 'nest.js';
import { ApplicationModule } from './modules/app.module';

const instance = express();
instance.use(bodyParser.json());

const app = NestFactory.create(ApplicationModule, instance);
app.listen(3000, () => console.log('Application is listening on port 3000.'));