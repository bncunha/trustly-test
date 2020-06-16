import instance from './Api';

export const ProductsService = {
  getAllProducts: () => {
    return instance.get('https://voliveira.s3-sa-east-1.amazonaws.com/sneakers/index.json');
  },

  getProductById: async (id) => {
    try {
      const allProducts = await ProductsService.getAllProducts();
      return allProducts.results.find((prod) => prod.id === id);
    } catch (err) {
      throw err;
    }
  },

};
