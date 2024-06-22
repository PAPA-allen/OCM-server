import express from "express";

import { createorder, getAllOrders } from "../controllers/order.controller";
import { authorizeRoles, isAuthenticated } from "../middleware/auth";
const orderRouter = express.Router();

orderRouter.post("/create-order", isAuthenticated, createorder);

orderRouter.get("/get-orders", isAuthenticated, authorizeRoles("admin"), getAllOrders);

export default orderRouter;