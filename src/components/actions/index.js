import service from '../../services/boredService';

export const ACTIVITY_REQUEST_SUCCEEDED = 'ACTIVITY_REQUEST_SUCCEEDED';
export const ACTIVITY_REQUEST_FAILED = 'ACTIVITY_REQUEST_FAILED';
export const SET_IS_LOADING = 'SET_IS_LOADING';

export const activityRequestSucceeded = (payload) => {
    return { type: ACTIVITY_REQUEST_SUCCEEDED, payload };
};
export const activityRequestFailed = (payload) => {
    return { type: ACTIVITY_REQUEST_FAILED, payload };
};
export const setIsLoading = (payload) => {
    return { type: SET_IS_LOADING, payload };
};
export const getRandomActivity = () => {
    const { getRandomActivityApi } = service();
    return (dispatch) => {
        getRandomActivityApi()
            .then((res) => {
                dispatch(activityRequestSucceeded(res.data));
            })
            .catch((err) => dispatch(activityRequestFailed(err)));
    };
};
export const getActivityByType = (type) => {
    const { getActivityByTypeApi } = service();
    return (dispatch) => {
        getActivityByTypeApi(type)
            .then((res) => dispatch(activityRequestSucceeded(res.data)))
            .catch((err) => dispatch(activityRequestFailed(err)));
    };
};

export const getActivityByParticipants = (participants) => {
    const { getActivityByParticipantsApi } = service();
    return (dispatch) => {
        getActivityByParticipantsApi(participants)
            .then((res) => {
                if (res.data.error) {
                    dispatch(activityRequestFailed(res.data.error));
                }
                dispatch(activityRequestSucceeded(res.data));
            })
            .catch((err) => dispatch(activityRequestFailed(err)));
    };
};
export const getActivityByPrice = (max, min = max) => {
    const { getActivityByPriceApi } = service();
    return (dispatch) => {
        getActivityByPriceApi(max, min)
            .then((res) => dispatch(activityRequestSucceeded(res.data)))
            .catch((err) => dispatch(activityRequestFailed(err)));
    };
};
