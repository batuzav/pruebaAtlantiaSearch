import { Router } from "express";
import { profile } from "../controllers/test1.controller";

const router = Router()

router.post('/auth', profile)

export default router