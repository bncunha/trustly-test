import instance from './Api';

export const ProductsService = {
  getAllProducts: () => {
    return instance.get('https://voliveira.s3-sa-east-1.amazonaws.com/sneakers/index.json');
  },
};
