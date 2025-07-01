import { PetApi } from "../api/petApi"
import { expect, test } from "../utils/fixtureBase"

// Define a test suite for the PET endpoints
test.describe("PET API CRUD Operations", () => {
	let petId: number

	test("POST: Create a new pet", async ({ petApi, testPet, petSchema }) => {
		const response = await petApi.creatPet(testPet)
		const body = await response.json()
		// Next declaration will be refactored, but for now, petId is assigned for GET, PUT, and DELETE requests.
		petId = body.id
		expect(response).toBeOK()
		expect(body.id).toBe(1331)
		expect(body.name).toBe("Cosmo")
		expect(() => petSchema.parse(body)).not.toThrow()
	})

	test("GET: Retrive a pet by ID", async ({ petApi, petSchema }) => {
		const response = await petApi.getPetById(petId)
		const body = await response.json()
		expect(response).toBeOK()
		expect(() => petSchema.parse(body)).not.toThrow()
	})

	test("PUT: Update a pet", async ({ petApi, testPet2, petSchema }) => {
		const response = await petApi.updatePet(testPet2)
		const body = await response.json()
		expect(response).toBeOK()
		expect(body.name).toBe("Bullet")
		expect(body.tags[0].id).toBe(2)
		expect(body.tags[0].name).toBe("tagTwo")
		expect(() => petSchema.parse(body)).not.toThrow()
	})

	test("DELETE: Delete a pet", async ({ petApi }) => {
		const deleteResponse = await petApi.deletePet(petId)
		expect(deleteResponse).toBeOK()
	})
})
