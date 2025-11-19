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

router.post("/upload-image", upload.single("image"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "no image uploaded" });
  }

  return res.json({
    message: "image uploaded successfully",
    fileName: req.file.filename,
    filePath: `/uploads/${req.file.filename}`,
  });
});


export default router;
