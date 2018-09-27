import {
  AUDIO_LOADING,
  AUDIO_LOADED,
  AUDIO_ERROR,
  LOAD_CANVAS,
} from '../constants/canvas';

export const audioLoading = (bytesLoaded, bytesTotal, duration) => ({
  type: AUDIO_LOADING,
  payload: {
    percentLoaded: parseInt((bytesLoaded / bytesTotal) * 100, 10),
    duration,
  },
});

export const audioLoaded = isLoaded => ({
  type: AUDIO_LOADED,
  payload: {
    isLoaded,
  },
});

export const audioError = (code, description) => ({
  type: AUDIO_ERROR,
  payload: {
    code,
    description,
  },
});

export const loadCanvas = state => ({
  type: LOAD_CANVAS,
  state,
});
