import z from 'zod';

export const todoFormSchema = z.object({
  title: z.string().min(1),
  status: z.enum(['pending', 'completed'])
});

export type TodoInput = z.infer<typeof todoFormSchema>;
