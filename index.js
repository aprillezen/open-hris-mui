import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'
import routes from './modules/Routes'
import { createStore, combineReducers, applyMiddleware , compose} from 'redux'
import { Provider } from 'react-redux'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import rootReducer from './reducer'
import thunkMiddleware from 'redux-thunk'

const store = createStore(
				rootReducer,
				compose(applyMiddleware(thunkMiddleware),window.devToolsExtension && window.devToolsExtension())
			  )

render(
	<Provider store={store}>
  		<Router routes={routes} history={browserHistory}/>
	</Provider>,
  document.getElementById('app')
)
