import z from 'zod';

export const positiveIntSchema = z.coerce.number().positive().int();
