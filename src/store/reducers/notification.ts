import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    notification: []
};

const auth = createSlice({
    name: 'notification',
    initialState,
    reducers: {
        SetNotificationData(state, action) {
            state.notification = action.payload;
        }
    }
});

export default auth.reducer;

export const { SetNotificationData } = auth.actions;
