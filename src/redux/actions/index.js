import { getQuestionsAPI } from '../../services/api';

export const NEW_PLAYER = 'NEW_PLAYER';
export const ADD_QUESTIONS = 'ADD_QUESTIONS';
export const FAILED_REQUEST = 'FAILED_REQUEST';
export const SUM_SCORE = 'SUM_SCORE';
export const RESTART = 'RESTART';

export function addPlayer(payload) {
  return {
    type: NEW_PLAYER,
    payload,
  };
}

export const sumScore = (payload) => ({
  type: SUM_SCORE,
  payload,
});

export const addQuestions = (payload) => ({
  type: ADD_QUESTIONS,
  payload,
});

export const failedRequest = (error) => ({
  type: FAILED_REQUEST,
  payload: error,
});

export const restart = () => ({
  type: RESTART,
});

export const fetchQuestionsAPI = (token) => async (dispatch) => {
  try {
    const game = await getQuestionsAPI(token);
    dispatch(addQuestions(game));
  } catch (error) {
    dispatch(failedRequest(error));
  }
};
