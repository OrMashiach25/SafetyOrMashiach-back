import { Router } from "express";
import { Events } from "../entities/Events";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const events = await Events.find();   
    res.json(events);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});


router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const event = await Events.findOne({ where: { Index: Number(id) } });

    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }

    return res.json(event);

  } catch (err) {
    console.error("Error:", err);
    return res.status(500).json({ error: "Something went wrong" });
  }
});


router.post("/", async (req, res) => {
  try {
    const body = req.body;

    if (Array.isArray(body)) {
      const events = Events.create(body);
      await Events.save(events);
      return res.json(events);
    }

    const event = Events.create(body);
    await event.save();
    return res.json(event);

  } catch (err) {
    console.error("Error:", err);
    return res.status(500).json({ error: "Something went wrong" });
  }
});


router.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;

    const event = await Events.findOneBy({ Index: Number(id) });

    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }

    Object.assign(event, body);
    await event.save();

    res.json({ message: "Event updated", event });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});


router.delete("/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);
    const result = await Events.delete({ Index: id });

    if (result.affected === 0 ) {
      return res.status(404).json({message: "Event not found" });
    }

    res.json({message: "Event deleted"});
  } catch (err) {
    console.error(err);
    res.status(500).json({message: "Server error"});
  }
});

export default router;
