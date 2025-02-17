import { pgTable, text, serial, integer, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const contactMessages = pgTable("contact_messages", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  subject: text("subject").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull()
});

export const aircraft = pgTable("aircraft", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  image: text("image").notNull(),
  specs: text("specs").notNull(), // JSON string of specifications
  createdAt: timestamp("created_at").defaultNow().notNull()
});

export const services = pgTable("services", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  icon: text("icon").notNull(), // Lucide icon name
  createdAt: timestamp("created_at").defaultNow().notNull()
});

// Export schemas for input validation
export const insertContactSchema = createInsertSchema(contactMessages).pick({
  name: true,
  email: true,
  subject: true,
  message: true
});

export const insertAircraftSchema = createInsertSchema(aircraft).pick({
  name: true,
  description: true,
  image: true,
  specs: true
});

export const insertServiceSchema = createInsertSchema(services).pick({
  title: true,
  description: true,
  icon: true
});

// Export types
export type InsertContact = z.infer<typeof insertContactSchema>;
export type ContactMessage = typeof contactMessages.$inferSelect;

export type InsertAircraft = z.infer<typeof insertAircraftSchema>;
export type Aircraft = typeof aircraft.$inferSelect;

export type InsertService = z.infer<typeof insertServiceSchema>;
export type Service = typeof services.$inferSelect;