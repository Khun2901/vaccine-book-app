'use client'

import { LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { DatePicker } from "@mui/x-date-pickers"
import { Select, MenuItem, TextField, InputLabel, FormControl} from "@mui/material"

export default function LocationDateForm() {
    return (
        <div className="bg-slate-100 rounded-lg space-y-2 w-fit px-10 py-5 flex flex-row justify-center">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker className="bg-white mr-10" sx={{width: 200}}/>
            </LocalizationProvider>
            <FormControl variant="standard" sx={{minWidth: 120 }}>
                <InputLabel>HOSPITAL</InputLabel>
                <Select variant="standard" name="location" id="location" label="HOSPITAL" className="h-[2em] w-[200px]">
                    <MenuItem value="CU">Chulalongkorn Hospital</MenuItem>
                    <MenuItem value="TU">Thammasart U. Hospital</MenuItem>
                    <MenuItem value="RJ">Rajavithi Hostpital</MenuItem>
                </Select>
            </FormControl>

        </div>

    )
}