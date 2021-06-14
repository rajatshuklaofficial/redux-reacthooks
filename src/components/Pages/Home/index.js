import React, { useEffect , useState } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';
import { useHistory } from "react-router-dom";

import { getUsers,login } from '../../../actions/actions'
import { selectUsersData, selectUserToken } from '../../../selectors/selectors'


const HomePage = ({
  users,
  getUsers,
  token,
  login,
}) => {
const [email, setEmail] = useState("")
const [password, setPassword] = useState('')
const [isLoggedIn, setIsloggedIn] = useState(false)

const history = useHistory();

const  callLoginFunc = (()=>{
 let data = {"email":email,"password":password} 
 login(data)
 redirectToAllproducts()
})

const redirectToAllproducts = () =>{
  if (localStorage.getItem('token_locad')) {
      setIsloggedIn(true)
      history.push("/allproducts");

    }
}
useEffect(() => {
    if(!users) {
      getUsers()
    }
    redirectToAllproducts()
  })
  


	return (
    <div>
    {(!isLoggedIn)?
      <div>
    		<h1>Login</h1>
    		<h2>Login page</h2>
        <div>
          <div>
          <input placeholder ="Enter your mail" onChange={(e)=>{setEmail(e.target.value)}}/>
          </div>
          <div>
          <input type= 'password' placeholder = 'Enter your password' onChange={(e)=>{setPassword(e.target.value)}} />
          </div>
          <button onClick = {callLoginFunc}>Login</button>
        </div>
    	</div>
      :
      <div>Loading...</div>
    }
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
    users:selectUsersData(),
    token:selectUserToken()
});


const mapDispatchToProps = dispatch => ({
  getUsers: () => {
    return dispatch(getUsers())
  },
  login:(x) =>{
    return dispatch(login(x))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage)
