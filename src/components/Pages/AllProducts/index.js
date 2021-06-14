import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';
import { getUsers, getAllProducts } from '../../../actions/actions'
import { selectUsersData, selectProductsData } from '../../../selectors/selectors'



const AllProducts = ({
  allProducts,
  getAllProducts,
}) => {
  console.log(allProducts)
  useEffect(() => {
    if (!allProducts) {
      getAllProducts()
    }
    console.log(allProducts)
  })
  
	return <div>
		<h1>All Products</h1>
		<h2>Product page</h2>
    <ul>
      {allProducts && allProducts.allProducts.map((product, index) => 
        <li key={index}>{product.productName}</li>
      )}
    </ul>
	</div>
}

const mapStateToProps = createStructuredSelector({
    users:selectUsersData(),
    allProducts:selectProductsData()
});

const mapDispatchToProps = dispatch => ({
  getUsers: () => {
    return dispatch(getUsers())
  },
  getAllProducts:() =>{
    return dispatch(getAllProducts())
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllProducts)
