import { Router } from "express";
import TableController from "../controllers/table.controller.js";

const router = new Router();
router.get("/rows/:offset", TableController.getTableRows);
router.get("/rows/name/:value/:operator/:offset", TableController.getTableRowsByName);
router.get("/rows/count/:value/:operator/:offset", TableController.getTableRowsByCount);
router.get("/rows/distance/:value/:operator/:offset", TableController.getTableRowsByDistance);

export default router;