import type { Express } from "express";
import { createServer, type Server } from "http";
import axios from "axios";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Fetch GitHub repositories
  app.get("/api/github/repos", async (req, res) => {
    try {
      const username = "Pavanhs1808";
      const response = await axios.get(`https://api.github.com/users/${username}/repos?sort=updated&per_page=4`);
      
      // Extract relevant data from GitHub API response
      const repos = response.data.map((repo: any) => ({
        id: repo.id,
        name: repo.name,
        description: repo.description,
        html_url: repo.html_url,
        language: repo.language,
        stargazers_count: repo.stargazers_count,
        forks_count: repo.forks_count,
        topics: repo.topics,
        created_at: repo.created_at,
        updated_at: repo.updated_at,
      }));
      
      res.json(repos);
    } catch (error) {
      console.error("Error fetching GitHub repositories:", error);
      res.status(500).json({ message: "Failed to fetch GitHub repositories" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
