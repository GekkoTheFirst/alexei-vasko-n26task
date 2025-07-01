import { test as base } from "@playwright/test"
import { PetApi } from "../api/petApi"
import { Pet } from "./types/petType"
import { ZodObject } from "zod"
import { petSchema } from "./schemas/petSchema"

export type TestOptions = {
	petApi: PetApi
	testPet: Pet
	testPet2: Pet
	petSchema: ZodObject<any>
}

export const test = base.extend<TestOptions>({
	petApi: async ({ request, testPet, testPet2 }, use) => {
		const petApi = new PetApi(request)
		await use(petApi)
	},
	testPet: {
		id: 1331,
		name: "Cosmo",
		category: {
			id: 1,
			name: "Dogs",
		},
		photoUrls: ["string"],
		tags: [
			{
				id: 1,
				name: "tagOne",
			},
		],
		status: "available",
	},
	testPet2: {
		id: 1331,
		name: "Bullet",
		category: {
			id: 1,
			name: "Dogs",
		},
		photoUrls: ["string"],
		tags: [
			{
				id: 2,
				name: "tagTwo",
			},
		],
		status: "available",
	},
	petSchema: petSchema,
})

export { expect } from "@playwright/test"
