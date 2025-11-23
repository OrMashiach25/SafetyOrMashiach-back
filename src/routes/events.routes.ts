import { Router } from "express";
import {  createEvent, deleteEvent, getAllEvents, updateEvent, uploadImage } from "../controllers/events.controller";
import multer from "multer";

const upload = multer({
  dest: "uploads/",
});

const router = Router();

router.get("/", getAllEvents);

router.post("/", createEvent);

router.put("/:id", updateEvent);

router.delete("/:id", deleteEvent);

router.post("/upload-image", upload.single("image"), uploadImage);

export default router;
