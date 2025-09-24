import router from "./router/userRouter.js"
import express from 'express';

const app = express();

app.use(express.json());
app.use('/api/users', router);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running http://localhost:${PORT}`);
});

export default app;