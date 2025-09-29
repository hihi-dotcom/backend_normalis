

import { Router } from "express"
import { deleteDataFromId, getALLData, insertData, run, MaxSearchinData, getDataFromId } from "./controller"
import data from "./data"

const router: Router = Router()

router.get("/", run)
router.get("/max", MaxSearchinData)
router.get("/dogs/:id", getDataFromId);
router.get("/dogs", getALLData)
router.post("/dogs",insertData)
router.delete("/dogs/:id",deleteDataFromId)
export default router
