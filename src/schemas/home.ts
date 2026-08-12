import { z } from "zod";

export const homeSchema = z.object({
  company: z.object({
    name: z.string(),
    slogan: z.string(),
  }),

  hero: z.object({
    badge: z.string(),
    title: z.string(),
    description: z.string(),

    primaryButton: z.string(),
    secondaryButton: z.string(),
  }),
});

export type HomeContent = z.infer<typeof homeSchema>;