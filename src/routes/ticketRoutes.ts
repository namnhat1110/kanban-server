import { createTicket, getTickets } from "@controllers/ticketController";
import express from "express";

const router = express.Router();

router.get("/", getTickets);
router.post("/", createTicket);

export default router;
