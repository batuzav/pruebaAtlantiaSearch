import { Router } from "express"
import { getUsers, postUser } from "../controllers/test2.controller"

const router = Router()

router.post('/', postUser)
router.get('/', getUsers)

export default router