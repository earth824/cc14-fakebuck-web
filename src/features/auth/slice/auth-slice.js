import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as authService from '../../../api/auth-api';
import { setAccessToken } from '../../../utils/localstorage';

const initialState = {
  isAuthenticated: false,
  error: null,
  loading: false
};

export const registerAsync = createAsyncThunk(
  'auth/registerAsync',
  async (input, thunkApi) => {
    try {
      const res = await authService.register(input);
      setAccessToken(res.data.accessToken);
    } catch (err) {
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);

export const login = createAsyncThunk('auth/login', async input => {
  const res = await authService.login(input);
  setAccessToken(res.data.accessToken);
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(registerAsync.pending, state => {
        state.loading = true;
      })
      .addCase(registerAsync.fulfilled, state => {
        state.isAuthenticated = true;
        state.loading = false;
      })
      .addCase(registerAsync.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(login.fulfilled, state => {
        state.isAuthenticated = true;
      })
});

export default authSlice.reducer;
