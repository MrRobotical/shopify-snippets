/*Add the following method under the onVariantChange function in the global.js file*/
this.updateVariantDetails();


/*Add the following to load and display the custom data per variant */
updateVariantDetails() {

  //load metafield data
  const allVariantMetafieldData = JSON.parse(document.querySelector('#variant_metafield_data').textContent);
  console.log(allVariantMetafieldData);
      
  //replace content in collapsible row
  const variantDetailsTxtElement = document.querySelector('#variant-details');
  variantDetailsTxtElement.innerHTML = allVariantMetafieldData[this.currentVariant.id];
  
}
