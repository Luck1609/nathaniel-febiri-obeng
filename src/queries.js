import { gql } from "@apollo/client"


const fetchCategories = gql`
  {
    categories {
      name
    }
    currencies {
      label
      symbol
    }
  }
`


const fetchCategoryDetails = gql`
  query ($input: CategoryInput) {
    category(input: $input) {
      products {
        id
        name
        inStock
        gallery
        attributes {
          id
          name
          type
          items {
            displayValue
            value
            id
          }
        }
        prices {
          currency {
            label
            symbol
          }
          amount
        }
      }
    }
  }
`


const fetchCurrencies = gql`
  {
    currencies {
      label
      symbol
    }
  }
`

export {
  fetchCategories,
  fetchCategoryDetails,
  fetchCurrencies,
  // fetchProductDetails
}