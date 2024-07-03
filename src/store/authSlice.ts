//import { createAsyncThunk } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {
      login: '',
      password: '',
    }
  },
  reducers: {}
});

export default authSlice.reducer;