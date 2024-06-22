import  express  from "express";
import { authorizeRoles, isAuthenticated } from "../middleware/auth";
import { getCoursesAnalytics, getOrderAnalytics, getUserAnalytics } from "../controllers/analytics.controller";
import { createLayout, editLayout } from "../controllers/layout.controller";
const layoutRouter = express.Router();

layoutRouter.post("/create-layout", isAuthenticated, authorizeRoles("admin"), createLayout);

layoutRouter.post("/edit-layout", isAuthenticated, authorizeRoles("admin"), editLayout);
export default layoutRouter;