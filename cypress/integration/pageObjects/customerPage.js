class customerPage
{
  converseShoes()
  {
    const productCard = cy.get('.card.mb-4')
    if(cy.contains('h5', 'Converse All Star Hi Plimsolls'))
    {
      productCard.click()
    }else{
      console.log("failed")
    }
  }

  addCartButton()
  {
    const button = cy.contains('Add to cart')
    button.click()
  }

  viewCartButton()
  {
    const button = cy.contains('View cart')
    button.click()
  }

  checkoutButton()
  {
    const button = cy.contains('Process to Checkout')
    button.click()
  }

  contactField(value)
  {
    const field = cy.get('#NewAddressForm_ContactName');
    field.clear();
    field.type(value);

    return this;
  }

  countryField(value)
  {
    const field = cy.get('#NewAddressForm_CountryId')
    field.select(value)

    return this
  }

  stateField(value)
  {
    const field = cy.get('#NewAddressForm_StateOrProvinceId')
    field.select(value)

    return this
  }

  cityField(value)
  {
    const field = cy.get('#NewAddressForm_City');
    field.clear();
    field.type(value);

    return this;
  }

  postCodeField(value)
  {
    const field = cy.get('#NewAddressForm_ZipCode');
    field.clear();
    field.type(value);

    return this;
  }

  addressField(value)
  {
    const field = cy.get('#NewAddressForm_AddressLine1');
    field.clear();
    field.type(value);

    return this;
  }

  phoneField(value)
  {
    const field = cy.get('#NewAddressForm_Phone');
    field.clear();
    field.type(value);

    return this;
  }

  paymentButton()
  {
    const button = cy.get('.text-right > .btn')
    button.click()
  }

  cashButton()
  {
    const button = cy.get('#checkout-payment')
    button.click()
  }

}

export default customerPage
