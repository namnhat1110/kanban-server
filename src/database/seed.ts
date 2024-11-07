import { ITicket, Status, Ticket } from "@models/Tickets";

export const seedDatabase = async () => {
  try {
    await Ticket.deleteMany({});

    const tickets: ITicket[] = [
      { title: "Look into render bug in dashboard", status: Status.BACKLOG },
      { title: "SOX compliance checklist", status: Status.BACKLOG },
      { title: "[SPIKE] Migrate to Azure", status: Status.BACKLOG },
      { title: "Document Notifications service", status: Status.BACKLOG },
      {
        title: "Research DB options for new microservice",
        status: Status.TODO,
      },
      { title: "Postmortem for outage", status: Status.TODO },
      { title: "Sync with product on Q3 roadmap", status: Status.TODO },
      {
        title: "Refactor context providers to use Zustand",
        status: Status.IN_PROGRESS,
      },
      { title: "Add logging to daily CRON", status: Status.IN_PROGRESS },
      {
        title: "Set up DD dashboards for Lambda listener",
        status: Status.COMPLETED,
      },
    ];

    await Ticket.insertMany(tickets);
    console.log("Database seeded successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
    process.exit(1);
  }
};
