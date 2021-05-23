import express from 'express';
import cors from 'cors';
import bookRoutes from './routes/book';
import amazonRoutes from './routes/amazon';

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

const baseUrl = '/api/v1';

app.use(baseUrl, bookRoutes);
app.use(baseUrl, amazonRoutes);

app.listen(3000, () => {
  console.log('The application is listening on port 3000!');
});
