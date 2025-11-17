import { Request, Response } from "express";
import { EventsService } from "../services/events.service";
import { json } from "stream/consumers";

export class EventsController {

  static async getAllEvents(req: Request, res: Response) {
    try {
      const events = await EventsService.getAllEvents();
      res.json(events);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Server error" });
    }
  }

  static async createEvent(req: Request, res: Response) {
    try {
      const body = req.body; 
      const eventsToCheck = Array.isArray(body) ? body : [body];

      for (const ev of eventsToCheck){
        if (ev.Date) {
            const eventTime = new Date(ev.Date);
            const now = new Date();

            if (eventTime > now) {
                return res.status(400).json({
                    message: "תאריך או שעה אינם חוקיים"
                });
            }
        }

        if (ev.eventDescription && ev.eventDescription.length > 800) {
            return res.status(400).json({
                message: "תיאור האירוע חייב להיות עד 800 תווים"
            });
        }
      }

      const created = await EventsService.createEvents(body);
      res.status(201).json(created);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Server error" });
    }
  }

  static async updateEvent(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const body = req.body;

      if(body.Date) {
        const eventTime = new Date(body.Date);
        const now = new Date();

        if(eventTime > now) {
            return res.status(400).json({ message: "תאריך או שעה אינם חוקיים"});
        }
      }

      if (body.eventDescription.length > 800 ) {
        return res.status(400).json ({ message:"תיאור האירוע עד 800 תווים"});
      }

      const updated = await EventsService.updateEvent(id, body);

      if (!updated) {
        return res.status(404).json({ message: "אירוע לא נמצא" });
      }

      res.json(updated);

    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Server error" });
    }
  }

  static async deleteEvent(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);

      if (isNaN(id)) {
        return res.status(400).json({ message: "id חייב להיות מספר" });
      }

      const deleted = await EventsService.deleteEvent(id);

      if (!deleted) {
        return res.status(404).json({ message: "אירוע לא נמצא" });
      }

      res.json({ message: "האירוע נמחק בהצלחה" });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Server error" });
    }
  }
}
