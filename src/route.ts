import express from 'express';
import {
  fetchAllProducts,
  uploadDataController
} from './controllers/controller';
import { insertBig } from './controllers/insertBig';
import { insertBigChildProcess } from './controllers/insertBigWithChildProcess';
import { splitFile } from './controllers/splitFile';

const router = express.Router();

router.get('/', fetchAllProducts);

router.get('/upload', uploadDataController);

router.get('/big', insertBig);

router.get('/splitFile', splitFile);

router.get('/bigChild', insertBigChildProcess);

export { router };
