import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'
import routes from './modules/Routes'
import { createStore, combineReducers, applyMiddleware , compose} from 'redux'
import { Provider } from 'react-redux'
import { syncHistoryWithStore, routerMiddleware, routerReducer } from 'react-router-redux'
import thunkMiddleware from 'redux-thunk'
import loginreducer from './reducer/login'
import mainReducer from './reducer/mainReducer'
import batchFormreducer from './reducer/batchFormreducer'

const routermiddleware = routerMiddleware(browserHistory)

const rootReducer = combineReducers({
	login: loginreducer,
	batch: mainReducer,
	batchForm: batchFormreducer,
	routing: routerReducer
})

const store = createStore(
				rootReducer,
				compose(applyMiddleware(thunkMiddleware, routermiddleware),window.devToolsExtension && window.devToolsExtension())
			  )

const history = syncHistoryWithStore(browserHistory, store)

render(
	<Provider store={store}>
  		<Router routes={routes} history={history}/>
	</Provider>,
  document.getElementById('app')
)
