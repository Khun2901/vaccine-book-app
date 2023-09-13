'use client'

import { TextField } from "@mui/material"

export default function BasicInfoForm() {
    return (
        <div className="bg-slate-100 rounded-lg w-fit px-8 py-5 flex flex-row justify-center">
            <TextField className="mr-14" id="name" label="NAME - SURNAME" variant="standard" />
            <TextField id="citizenID" label="CITIZEN ID" variant="standard" />
        </div>
    )
}