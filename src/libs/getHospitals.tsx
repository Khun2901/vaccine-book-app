import { revalidateTag } from "next/cache"

export default async function getHospitals() {

    await new Promise((resolve) => setTimeout(resolve, 5000))

    revalidateTag("hospitals")
    const response = await fetch("http://localhost:5000/api/v1/hospitals", {next: {tags: ['hospitals']}})
    if(!response.ok) {
        throw new Error("Failed to fetch Hospitals")
    }
    return await response.json()
}