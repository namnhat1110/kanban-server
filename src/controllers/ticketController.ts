import { Ticket } from "@models/Tickets";
import { Request, Response } from "express";

export const getTickets = async (req: Request, res: Response) => {
  try {
    const tickets = await Ticket.find();
    res.json(tickets);
  } catch (error) {
    res.status(500).json({
      message: error instanceof Error ? error.message : "Unknown error",
    });
  }
};

export const createTicket = async (req: Request, res: Response) => {
  const { title, status } = req.body;

  try {
    const savedTicket = await Ticket.create({ title, status });
    res.status(201).json(savedTicket);
  } catch (error) {
    console.error("Error creating tickets:", error);
    res.status(400).json({
      message: error instanceof Error ? error.message : "Unknown error",
    });
  }
};

export const updateTicket = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { status } = req.body;

  try {
    const updatedTicket = await Ticket.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );
    res.json(updatedTicket);
  } catch (error) {
    res.status(400).json({
      message: error instanceof Error ? error.message : "Unknown error",
    });
  }
};
