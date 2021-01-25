export function addProductAction(product) {
  return () => {
    console.log('actions', product);
  };
}
