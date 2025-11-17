import { Events } from "../entities/Events";

export class EventsService {
  static async getAllEvents() {
    return await Events.find();
  }

static async createEvents(data: any | any[]) {
    if (Array.isArray(data)) {
      const events = Events.create(data);
      return await Events.save(events);
    } else {
      const event = Events.create(data);
      await event.save();
      return event;
    }
  }
  
static async updateEvent(id: number, data: any) {
    const event = await Events.findOneBy({ Index: id });

    if (!event) {
      return null;
    }
    Object.assign(event, data);
    return await event.save();
}

static async deleteEvent(id: number) {
    const event = await Events.findOneBy({ Index: id });

    if (!event) {
      return null;
    }
    await event.remove();
    return true;
}
  
}
