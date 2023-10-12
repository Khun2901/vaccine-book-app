export default async function getHospital(id: string) {

    const response = await fetch(`http://localhost:5000/api/v1/hospitals/${id}`)
    if(!response.ok) {
        throw new Error("Failed to fetch Hospital")
    }
    return await response.json()
}