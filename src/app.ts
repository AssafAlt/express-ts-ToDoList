import express, { Request, Response, NextFunction } from "express";
import { json } from "body-parser";

import todoRoute from "./routes/todos";

const app = express();
app.use(json());

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: err.message });
});

app.use("/todos", todoRoute);

app.listen(3000);
