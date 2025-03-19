import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {Person} from '../types/types'
interface PeopleState {
  list: Person[];
  loading: boolean;
}

const initialState: PeopleState = {
  list: [],
  loading: false,
};

const peopleSlice = createSlice({
  name: 'people',
  initialState,
  reducers: {
    setPeople: (state, action: PayloadAction<Person[]>) => {
      state.list = action.payload;
      state.loading = false;
    },
  },
});

export const { setPeople } = peopleSlice.actions;
export default peopleSlice.reducer;