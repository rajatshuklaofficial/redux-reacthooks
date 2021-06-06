import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getUsers } from '../../../actions/actions'

const HomePage = ({
  users,
  getUsers,
}) => {
  console.log(users)
  useEffect(() => {
    if(!users) {
      getUsers()
    }
  })
  
	return <div>
		<h1>Home</h1>
		<h2>Landing page</h2>
    <ul>
      {users && users.map((user, index) => 
        <li key={index}>{user.name}</li>
      )}
    </ul>
	</div>
}

const mapStateToProps = state => ({
  users: state.rootReducer.users
},console.log(state.rootReducer.toJS()))

const mapDispatchToProps = dispatch => ({
  getUsers: () => {
    return dispatch(getUsers())
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage)
