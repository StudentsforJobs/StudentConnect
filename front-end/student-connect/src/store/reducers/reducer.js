import { REGISTER_USER, GET_HOMEPAGE, POST_TO_NEWSFEED} from './constants';

const initialStudentState = {isPending: false, students: [] }

function studentReducer (state = initialStudentState, action) {
  switch (action.type) {
    case REGISTER_USER:
    return object.assign({}, state, { isPending: true})
    case GET_HOMEPAGE:
    return object.assign({}, state, { isPending: true})
  }
}
