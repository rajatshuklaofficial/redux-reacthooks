import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';
import { getUsers } from '../../../actions/actions'
import { selectUsersData } from '../../../selectors/selectors'



const AllProducts = ({
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
		<h1>All Products</h1>
		<h2>Landing page</h2>
    <ul>
      {users && users.map((user, index) => 
        <li key={index}>{user.name}</li>
      )}
    </ul>
	</div>
}

const mapStateToProps = createStructuredSelector({
    users:selectUsersData()
});

const mapDispatchToProps = dispatch => ({
  getUsers: () => {
    return dispatch(getUsers())
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllProducts)
