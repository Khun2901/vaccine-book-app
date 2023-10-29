import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { BookingItem } from "../../../interfaces"

type BookingState = {
    bookingItems: BookingItem[]
}

const initialState: BookingState = { bookingItems: [] }

export const bookSlice = createSlice({
    name: "book",
    initialState,
    reducers: {
        addBooking: (state, action: PayloadAction<BookingItem>) => {
            if(state.bookingItems.length !== 0){
                state.bookingItems.pop()
            }
            state.bookingItems.push(action.payload)
        },
        removeBooking: (state, action: PayloadAction<BookingItem>) => {
            state.bookingItems.pop()
        }
    }
})

export const { addBooking, removeBooking } = bookSlice.actions
export default bookSlice.reducer