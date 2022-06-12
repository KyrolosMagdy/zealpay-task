import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';

import { Level } from '../../types/level';

export interface QuestionsState {
  value: any[];
  status: 'idle' | 'loading' | 'failed' | 'success';
  levels: Level[];
  selectedLevel: Level;
}

const initialState: QuestionsState = {
  value: [],
  status: 'idle',
  levels: [
    {
      name: 'Easy',
      mins: 1,
      seconds: 30,
    },
    {
      name: 'medium',
      mins: 1,
      seconds: 0,
    },
    {
      name: 'hard',
      mins: 0,
      seconds: 30,
    },
  ],
  selectedLevel: {} as Level,
};

export const QuestionsSlice = createSlice({
  name: 'questions',
  initialState,
  reducers: {
    handleSelectLevel: (state, action) => {
      state.selectedLevel = action.payload;
    },
  },
});

export const { handleSelectLevel } = QuestionsSlice.actions;

export const selectLevels = (state: RootState) => state.questions.levels;

export default QuestionsSlice.reducer;
