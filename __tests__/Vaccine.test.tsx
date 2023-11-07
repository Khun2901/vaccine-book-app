import HospitalCatalog from "@/components/HospitalCatalog";
import { render, screen, waitFor } from "@testing-library/react"

const mockResult = {
    "success": true,
    "count": 3,
    "data": [{
        "_id": "6527c2d23c7e46f3ad681607",
        "name": "Chulalongkorn Hospital",
        "address": "1873 Rama IV Rd",
        "district": "Pathum Wan",
        "province": "Bangkok",
        "postalcode": "10330",
        "tel": "026494000",
        "picture": "https://drive.google.com/uc?id=1nekIjHnFtGMdbmsYrBao55dGvtYER62P",
        "__v": 0,
        "id": "6527c2d23c7e46f3ad681607"
      },
      {
        "_id": "6527c3163c7e46f3ad68160a",
        "name": "Rajavithi Hospital",
        "address": "2 Phaya Thai Rd, Thung Phaya Thai",
        "district": "Ratchathewi",
        "province": "Bangkok",
        "postalcode": "10400",
        "tel": "022062900",
        "picture": "https://drive.google.com/uc?id=15kWfVT9wchkH3I9BHKeqftTmj0bFgJtu",
        "__v": 0,
        "id": "6527c3163c7e46f3ad68160a"
      },
      {
        "_id": "6527c34d3c7e46f3ad68160d",
        "name": "Thammasat University Hospital",
        "address": "95 Moo 8 Phaholyothin Frontage Rd, Khlong Nueng",
        "district": "Khlong Luang",
        "province": "Pathum Thani",
        "postalcode": "12120",
        "tel": "029269999",
        "picture": "https://drive.google.com/uc?id=1jit7S4cRATEfDi64YjjK1ur2jGlZYs2e",
        "__v": 0,
        "id": "6527c34d3c7e46f3ad68160d"
      }]
}

describe('HospitalCatalog', () => {
    it('should have correct numbers of hospital images', async() => {
        const hospitalCatalog = await HospitalCatalog({hospitalJson: mockResult})
        render(hospitalCatalog)
        await waitFor(() => {
            const hospitalImages = screen.queryAllByRole('img')
            expect(hospitalImages.length).toBe(3)
        })
    })
})