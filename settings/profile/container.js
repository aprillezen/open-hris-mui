import { load, saveFailedForm, save, valueChangeForm} from './actions'
import Profile from './components/index'
import { connect } from 'react-redux'

const mapStateToProps=(state)=>{
	return{
		isFetching: state.profile.isFetching,
		isFailed: state.profile.isFailed,
		message: state.profile.message,
		hasError: state.profile.hasError,
		profile: state.profile.profile,
		isSaving: state.profile.isSaving
	}
}

const mapDispatchToProps=(dispatch)=>{
	return {
		init: () => {
      		dispatch(load())
    	},
    	save: (profile)=>{
    		dispatch(save(profile))
    	},
    	saveFailed: (message)=>{
    		dispatch(saveFailedForm(message))
    	},
    	valueChanged: (profile, field, value)=>{
			dispatch(valueChangeForm(profile, field,value))
		}
	}
}


const container = connect(mapStateToProps, mapDispatchToProps)(Profile)

export default container

