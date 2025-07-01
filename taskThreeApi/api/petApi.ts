import { APIRequestContext } from "@playwright/test"
import { Pet } from "../utils/types/petType"

export class PetApi {
	readonly request: APIRequestContext

	constructor(request: APIRequestContext) {
		this.request = request
	}

	async creatPet(petData: Pet) {
		const response = await this.request.post(`pet`, { data: petData })
		return response
	}

	async getPetById(petId: number) {
		if (!petId) {
			throw new Error("PetId is required for retriving the pet information.")
		}
		const response = await this.request.get(`pet/${petId}`)
		return response
	}

	async updatePet(petData: Pet) {
		if (!petData.id) {
			throw new Error("PetId is required for an update.")
		}
		const response = await this.request.put(`pet`, { data: petData })
		return response
	}

	async deletePet(petId: number) {
		if (!petId) {
			throw new Error("PetId is required for deleting the pet.")
		}
		const response = await this.request.delete(`pet/${petId}`)
		return response
	}
}
