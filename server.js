import express from 'express';
import UserRouter from './router/userRouter.js';
import ApiKeyRouter from './router/apiKeyRouter.js';

const app = express();

app.use(express.json());

app.use('/user', UserRouter);
app.use('/api-key', ApiKeyRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost: ${PORT}`);
});