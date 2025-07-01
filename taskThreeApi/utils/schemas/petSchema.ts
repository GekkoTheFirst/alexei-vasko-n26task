import z from "zod"

export const petSchema = z.object({
	id: z.number().int(),
	name: z.string(),
	category: z.object({
		id: z.number().int(),
		name: z.string(),
	}),
	photoUrls: z.array(z.string()),
	tags: z.array(
		z.object({
			id: z.number().int(),
			name: z.string(),
		}),
	),
	status: z.enum(["available", "pending", "sold"]),
})
