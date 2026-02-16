import z from 'zod';

export const registerSchema = z
  .object({
    email: z.email(),
    password: z.string().regex(/^[0-9a-zA-Z]{6,}$/),
    confirm: z.string().min(1)
  })
  .refine((value) => value.password === value.confirm, {
    path: ['confirm'],
    error: 'Password and confirm password do not match'
  });

export type RegisterInput = z.infer<typeof registerSchema>;

export const registerExcludeConfirmSchema = registerSchema.transform(
  ({ confirm, ...rest }) => rest
);

export const loginSchema = z.object({
  email: z.email(),
  password: z.string().min(1)
});

export type LoginInput = z.infer<typeof loginSchema>;
