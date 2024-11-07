import {
  createTicket,
  getTickets,
  updateTicket,
} from "@controllers/ticketController";
import express from "express";

const router = express.Router();

router.get("/", getTickets);
router.post("/", createTicket);
router.put("/:id", updateTicket);

export default router;
