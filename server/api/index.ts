import { Router } from "express";
import cityRouter from "./city";
import countryRouter from "./country";

const apiRouter = Router();

apiRouter.use("/cities", cityRouter);
apiRouter.use("/contries", countryRouter);

export default apiRouter;
