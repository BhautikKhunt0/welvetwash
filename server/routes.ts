import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertQuoteRequestSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Quote request endpoint
  app.post("/api/quote-requests", async (req, res) => {
    try {
      const validatedData = insertQuoteRequestSchema.parse(req.body);
      const quoteRequest = await storage.createQuoteRequest(validatedData);
      
      // In a real application, you would send an email here
      console.log("New quote request received:", quoteRequest);
      
      res.status(201).json({
        success: true,
        message: "Quote request submitted successfully",
        id: quoteRequest.id
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({
          success: false,
          message: "Validation error",
          errors: error.errors
        });
      } else {
        console.error("Error creating quote request:", error);
        res.status(500).json({
          success: false,
          message: "Internal server error"
        });
      }
    }
  });

  // Get all quote requests (for admin purposes)
  app.get("/api/quote-requests", async (req, res) => {
    try {
      const requests = await storage.getAllQuoteRequests();
      res.json({
        success: true,
        data: requests
      });
    } catch (error) {
      console.error("Error fetching quote requests:", error);
      res.status(500).json({
        success: false,
        message: "Internal server error"
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
