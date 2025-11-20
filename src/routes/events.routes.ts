import { Router } from "express";
import { EventsController } from "../controllers/events.controller";
import multer from "multer";

const upload = multer({
  dest: "uploads/",
});

const router = Router();

router.get("/", EventsController.getAllEvents);

router.post("/", EventsController.createEvent);

router.put("/:id", EventsController.updateEvent);

router.delete("/:id", EventsController.deleteEvent);

router.post("/upload-image", upload.single("image"), EventsController.uploadImage);

export default router;
