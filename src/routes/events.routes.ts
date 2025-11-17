import { Router } from "express";
import { EventsController } from "../controllers/events.controller";

const router = Router();

router.get("/", EventsController.getAllEvents);

router.post("/", EventsController.createEvent);

router.put("/:id", EventsController.updateEvent);

router.delete("/:id", EventsController.deleteEvent);

export default router;
