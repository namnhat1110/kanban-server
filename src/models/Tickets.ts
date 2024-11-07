import mongoose, { Schema, Document } from "mongoose";

export enum Status {
  BACKLOG = "backlog",
  TODO = "todo",
  IN_PROGRESS = "in-progress",
  COMPLETED = "completed",
}

export interface ITicket {
  title: string;
  status: Status;
}

export interface ITicketDocument extends ITicket, Document {}

const TicketSchema = new Schema<ITicketDocument>(
  {
    title: { type: String, required: true },
    status: {
      type: String,
      enum: Status,
      default: Status.BACKLOG,
    },
  },
  { timestamps: true }
);

export const Ticket = mongoose.model("Ticket", TicketSchema);
