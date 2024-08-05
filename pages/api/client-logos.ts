import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<string[]>
  ) {
    const imageDirectory = path.join(process.cwd(), 'public/assets/Clients');
    
    try {
      const imageFilenames = fs.readdirSync(imageDirectory);
      res.status(200).json(imageFilenames);
    } catch (error) {
      console.error("Error reading image directory:", error);
      res.status(500).json([]);
    }
  }