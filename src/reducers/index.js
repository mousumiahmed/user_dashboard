import { combineReducers } from 'redux'

import AlllaunchReducer from './Alllaunches.js'
import PastlaunchReducer from './PastlaunchReducer.js'
import UpcomminglaunchReducer from './UpcomminglaunchReducer.js'
import LatestlaunchReducer from './LatestlaunchesReducer.js'
import NextlaunchReducer from './NextlaunchReducer.js'


const rootReducer = combineReducers({
  all: AlllaunchReducer,
  pastlaunch: PastlaunchReducer,
  upcomminglaunch: UpcomminglaunchReducer,
  latestlaunch:LatestlaunchReducer,
  nextlaunch:NextlaunchReducer
})

export default rootReducer