import { Router } from "express";
import { Events } from "../entities/Events";

const router = Router();

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

export default router;
