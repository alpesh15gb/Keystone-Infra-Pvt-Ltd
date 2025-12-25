import { type User, type InsertUser, type ContactSubmission, type InsertContactSubmission, type SiteContent, type InsertSiteContent } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission>;
  getContactSubmissions(): Promise<ContactSubmission[]>;
  saveSiteContent(content: InsertSiteContent): Promise<SiteContent>;
  getSiteContent(id: string): Promise<SiteContent | undefined>;
  getAllSiteContent(): Promise<SiteContent[]>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private contactSubmissions: Map<string, ContactSubmission>;
  private siteContent: Map<string, SiteContent>;

  constructor() {
    this.users = new Map();
    this.contactSubmissions = new Map();
    this.siteContent = new Map();
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createContactSubmission(insertSubmission: InsertContactSubmission): Promise<ContactSubmission> {
    const id = randomUUID();
    const submission: ContactSubmission = {
      ...insertSubmission,
      id,
      createdAt: new Date(),
    };
    this.contactSubmissions.set(id, submission);
    return submission;
  }

  async getContactSubmissions(): Promise<ContactSubmission[]> {
    return Array.from(this.contactSubmissions.values()).sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
    );
  }

  async saveSiteContent(insertContent: InsertSiteContent): Promise<SiteContent> {
    const content: SiteContent = {
      ...insertContent,
      updatedAt: new Date(),
    };
    this.siteContent.set(content.id, content);
    return content;
  }

  async getSiteContent(id: string): Promise<SiteContent | undefined> {
    return this.siteContent.get(id);
  }

  async getAllSiteContent(): Promise<SiteContent[]> {
    return Array.from(this.siteContent.values());
  }
}

export const storage = new MemStorage();
