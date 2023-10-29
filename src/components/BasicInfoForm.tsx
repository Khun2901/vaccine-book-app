'use client'

import { TextField } from "@mui/material"
import { useState } from "react"

export default function BasicInfoForm({onNameSurnameChange, onCitizenIDChange}: 
    {onNameSurnameChange: Function, onCitizenIDChange: Function}) {

    const [nameSurname, setNameSurname] = useState<string|null>(null)
    const [citizenID, setCitizenID] = useState<string|null>(null)

    return (
        <div className="bg-slate-100 rounded-lg w-fit px-8 py-5 flex flex-row justify-center">
            <TextField className="mr-14" id="name" label="NAME - SURNAME" variant="standard" value={nameSurname}
            onChange={(e) => {setNameSurname(e.target.value); onNameSurnameChange(e.target.value)}}/>
            <TextField id="citizenID" label="CITIZEN ID" variant="standard" value={citizenID}
            onChange={(e) => {setCitizenID(e.target.value); onCitizenIDChange(e.target.value)}}/>
        </div>
    )
}