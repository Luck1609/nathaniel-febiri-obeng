const getActiveCurrency = (prices, currency) => {
  return prices.indexOf(prices.filter(price => price.currency.label === currency)[0])
}

const addToCartErrors = (state, attributes, errors = []) => {
  attributes.map(({ name }) => {
    if (!Object.keys(state).includes(name.toLowerCase())) {
      errors = [...errors, { name, message: `Select product ${name}` }];
    }
    
    return errors;
  });

  return errors
}


export {
  getActiveCurrency,
  addToCartErrors
}