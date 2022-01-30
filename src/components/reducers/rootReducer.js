import {
    ACTIVITY_REQUEST_FAILED,
    ACTIVITY_REQUEST_SUCCEEDED,
} from '../actions';

const initialState = {
    activityData: {
        activity: '',
        accessibility: 0,
        type: '',
        participants: 0,
        price: 0,
    },
    error: null,
};

const activityReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTIVITY_REQUEST_SUCCEEDED:
            return {
                ...state,
                activityData: action.payload,
            };
        case ACTIVITY_REQUEST_FAILED:
            return { ...state, error: action.payload };
        default:
            return state;
    }
};
export default activityReducer;
