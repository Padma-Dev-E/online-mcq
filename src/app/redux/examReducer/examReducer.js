/**
 * Created by Kittxdev www.kittxdev.com
 * Developer: Padma Dev.E
 * Developer Contact: padmadev@kittxdev.com
 * Date: 11/07/24
 * Time: 15:49:54
 * Project: sh_mcq_web_next
 */
/**
 * Created by Kittxdev www.kittxdev.com
 * Developer: Padma Dev.E
 * Developer Contact: padmadev@kittxdev.com
 * Date: 10/07/24
 * Time: 21:50:25
 * Project: sh_mcq_web_next
 */
'use client'
import {createSlice} from "@reduxjs/toolkit";
import apiService from "../../api/apiService";
import {endPoints} from "../../api/endpoints";
import {createAPIAsyncReducers, formatAxiosErrorMessage} from "@/app/redux/redux_utils";

const initialExamState = {
    ExamList: {
        isLoading: false,
        data: null,
        error: null,
    },
    ExamCreate: {
        isLoading: false,
        data: null,
        error: null,
    },
    QuestionCreate: {
        isLoading: false,
        data: null,
        error: null,
    },
    QuestionList: {
        isLoading: false,
        data: null,
        error: null,
    },
    JoinExam: {
        isLoading: false,
        data: null,
        error: null,
    },
    MyQuestion: {
        isLoading: false,
        data: null,
        error: null,
    },
    AnswerQuestion: {
        isLoading: false,
        data: null,
        error: null,
    },
    ExamDetails: {
        isLoading: false,
        data: null,
        error: null,
    },
    ExamStatusUpdate: {
        isLoading: false,
        data: null,
        error: null,
    },
    ExamUpdate: {
        isLoading: false,
        data: null,
        error: null,
    },
    ExamCandidate: {
        isLoading: false,
        data: null,
        error: null,
    },
    ExamCandidateDetails: {
        isLoading: false,
        data: null,
        error: null,
    },
    ExamPublicDetails: {
        isLoading: false,
        data: null,
        error: null,
    },
};

export const examSlice = createSlice({
    name: "exam",
    initialState: {
        ...initialExamState,
    },
    reducers: {
        ...createAPIAsyncReducers('ExamList', initialExamState.ExamList),
        ...createAPIAsyncReducers('ExamCreate', initialExamState.ExamCreate),
        ...createAPIAsyncReducers('QuestionCreate', initialExamState.QuestionCreate),
        ...createAPIAsyncReducers('QuestionList', initialExamState.QuestionList),
        ...createAPIAsyncReducers('JoinExam', initialExamState.JoinExam),
        ...createAPIAsyncReducers('MyQuestion', initialExamState.MyQuestion),
        ...createAPIAsyncReducers('AnswerQuestion', initialExamState.AnswerQuestion),
        ...createAPIAsyncReducers('ExamDetails', initialExamState.ExamDetails),
        ...createAPIAsyncReducers('ExamStatusUpdate', initialExamState.ExamStatusUpdate),
        ...createAPIAsyncReducers('ExamUpdate', initialExamState.ExamUpdate),
        ...createAPIAsyncReducers('ExamCandidate', initialExamState.ExamCandidate),
        ...createAPIAsyncReducers('ExamCandidateDetails', initialExamState.ExamCandidateDetails),
        ...createAPIAsyncReducers('ExamPublicDetails', initialExamState.ExamPublicDetails),
    },
});

export const listExamApi = () => async (dispatch) => {
    dispatch(ExamListRequesting());
    apiService
        .get(endPoints.exam.list, {})
        .then((response) => {
            dispatch(ExamListSuccess(response.data))
        })
        .catch((error) =>
            dispatch(ExamListError(formatAxiosErrorMessage(error)))
        );
};

export const createExamApi = (data) => async (dispatch) => {
    dispatch(ExamCreateRequesting());
    apiService
        .post(endPoints.exam.list, data)
        .then((response) => {
            dispatch(ExamCreateSuccess(response.data))
        })
        .catch((error) =>
            dispatch(ExamCreateError(formatAxiosErrorMessage(error)))
        );
};

export const listQuestionApi = (id) => async (dispatch) => {
    dispatch(QuestionListRequesting());
    apiService
        .get(`exam/${id}/questions/`, {})
        .then((response) => {
            dispatch(QuestionListSuccess(response.data))
        })
        .catch((error) =>
            dispatch(QuestionListError(formatAxiosErrorMessage(error)))
        );
};

export const createQuestionApi = (data) => async (dispatch) => {
    dispatch(QuestionCreateRequesting());
    apiService
        .post(endPoints.question.list, data)
        .then((response) => {
            dispatch(QuestionCreateSuccess(response.data))
        })
        .catch((error) =>
            dispatch(QuestionCreateError(formatAxiosErrorMessage(error)))
        );
};

export const joinExamApi = (data) => async (dispatch) => {
    dispatch(JoinExamRequesting());
    apiService
        .post(endPoints.exam.join, data)
        .then((response) => {
            dispatch(JoinExamSuccess(response.data))
        })
        .catch((error) =>
            dispatch(JoinExamError(formatAxiosErrorMessage(error)))
        );
};

export const MyQuestionApi = () => async (dispatch) => {
    dispatch(MyQuestionRequesting());
    apiService
        .get(endPoints.question.list, {})
        .then((response) => {
            dispatch(MyQuestionSuccess(response.data))
        })
        .catch((error) =>
            dispatch(MyQuestionError(formatAxiosErrorMessage(error)))
        );
};

export const AnswerQuestionApi = (data) => async (dispatch) => {
    dispatch(AnswerQuestionRequesting());
    apiService
        .post(endPoints.question.answer, data)
        .then((response) => {
            dispatch(MyQuestionSuccess(response.data))
        })
        .catch((error) =>
            dispatch(AnswerQuestionError(formatAxiosErrorMessage(error)))
        );
};

export const ExamDetailsApi = (id) => async (dispatch) => {
    dispatch(ExamDetailsRequesting());
    apiService
        .get(`exam/${id}/details/`, {})
        .then((response) => {
            dispatch(ExamDetailsSuccess(response.data))
        })
        .catch((error) =>
            dispatch(ExamDetailsError(formatAxiosErrorMessage(error)))
        );
};

export const ExamPublicDetailsApi = (id) => async (dispatch) => {
    dispatch(ExamPublicDetailsRequesting());
    apiService
        .get(`exam/${id}/public/`, {})
        .then((response) => {
            dispatch(ExamPublicDetailsSuccess(response.data))
        })
        .catch((error) =>
            dispatch(ExamPublicDetailsError(formatAxiosErrorMessage(error)))
        );
};

export const ExamStatusUpdateApi = (id, data) => async (dispatch) => {
    dispatch(ExamDetailsRequesting());
    apiService
        .patch(`exam/${id}/status/`, data)
        .then((response) => {
            dispatch(ExamDetailsSuccess(response.data))
        })
        .catch((error) =>
            dispatch(ExamDetailsError(formatAxiosErrorMessage(error)))
        );
};

export const ExamUpdateApi = (id, data) => async (dispatch) => {
    dispatch(ExamUpdateRequesting());
    apiService
        .put(`exam/${id}/update/`, data)
        .then((response) => {
            dispatch(ExamUpdateSuccess(response.data))
        })
        .catch((error) =>
            dispatch(ExamUpdateError(formatAxiosErrorMessage(error)))
        );
};

export const ExamCandidateApi = (id) => async (dispatch) => {
    dispatch(ExamCandidateRequesting());
    apiService
        .get(`exam/${id}/participants/`, {})
        .then((response) => {
            dispatch(ExamCandidateSuccess(response.data))
        })
        .catch((error) =>
            dispatch(ExamCandidateError(formatAxiosErrorMessage(error)))
        );
};

export const ExamCandidateDetailsApi = (id, part_id) => async (dispatch) => {
    dispatch(ExamCandidateDetailsRequesting());
    apiService
        .get(`exam/${id}/participants/${part_id}/details/`, {})
        .then((response) => {
            dispatch(ExamCandidateDetailsSuccess(response.data))
        })
        .catch((error) =>
            dispatch(ExamCandidateDetailsError(formatAxiosErrorMessage(error)))
        );
};

export const {
    ExamListRequesting,
    ExamListSuccess,
    ExamListError,
    ExamListReset,

    ExamCreateRequesting,
    ExamCreateSuccess,
    ExamCreateError,
    ExamCreateReset,

    QuestionCreateRequesting,
    QuestionCreateSuccess,
    QuestionCreateError,
    QuestionCreateReset,

    QuestionListRequesting,
    QuestionListSuccess,
    QuestionListError,
    QuestionListReset,

    JoinExamRequesting,
    JoinExamSuccess,
    JoinExamError,
    JoinExamReset,

    MyQuestionRequesting,
    MyQuestionSuccess,
    MyQuestionError,
    MyQuestionReset,

    AnswerQuestionRequesting,
    AnswerQuestionSuccess,
    AnswerQuestionError,
    AnswerQuestionReset,

    ExamDetailsRequesting,
    ExamDetailsSuccess,
    ExamDetailsError,
    ExamDetailsReset,

    ExamStatusUpdateRequesting,
    ExamStatusUpdateSuccess,
    ExamStatusUpdateError,
    ExamStatusUpdateReset,

    ExamUpdateRequesting,
    ExamUpdateSuccess,
    ExamUpdateError,
    ExamUpdateReset,

    ExamCandidateRequesting,
    ExamCandidateSuccess,
    ExamCandidateError,
    ExamCandidateReset,

    ExamCandidateDetailsRequesting,
    ExamCandidateDetailsSuccess,
    ExamCandidateDetailsError,
    ExamCandidateDetailsReset,

    ExamPublicDetailsRequesting,
    ExamPublicDetailsSuccess,
    ExamPublicDetailsError,
    ExamPublicDetailsReset,

} = examSlice.actions;
export const ExamState = (state) => state.exam;
export default examSlice.reducer;
