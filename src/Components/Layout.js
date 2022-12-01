import React, { Component } from "react";
import { Outlet } from "react-router-dom";
import { Loading } from "Assets/svg";
import Navbar from "./Navbar";
import { fetchCategories, fetchCategoryDetails } from "queries";
import { withRouter } from "Hooks/CustomHooks";
import { connect } from "react-redux";
import { updateProducts, switchCurrency } from "Redux/index";


class Layout extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      categories: null,
      currencies: null,
      categoryDetails: null,
      productDetails: null,
    }

    
    this.request = this.request.bind(this)
  }



  componentDidMount() {
  
    const data = async () => {
      const result = await this.props.client.query({
        query: fetchCategories
      })

      // console.log('CDM results', result)

      this.props.dispatch(switchCurrency(result.data.currencies[0]))

      this.setState({...this.state, ...result.data})
      
      const category = await this.props.client.query({
        query: fetchCategoryDetails,
        variables: {input: {title: this.props.location.pathname.split('/')[1]}}
      })

      this.props.dispatch(updateProducts(category.data.category.products))
    };
    data()
  }


  async request (param) {
    const result = await this.props.client.query({
      query: fetchCategoryDetails,
      variables: { input: {title: param} }
    })

    this.props.dispatch(updateProducts(result.data.category.products))
  }

  render() { 

    return (
      <div>
        {
          !this.state.categories && (
            <div className="app-loader flex">
              <Loading className="loader" />
            </div>
          )
        }
        <Navbar 
          navLinks={this.state.categories ?? []} 
          request={this.request} 
          currencies={this.state.currencies}
        />

        <main className="container">
          <Outlet />
        </main>

      </div>
    );
  }
}
 
const mapStateToProps = (state) => ({
  state
})

export default connect(mapStateToProps)(withRouter(Layout));