import {
  ADD_PRODUCT,
  ADD_PRODUCT_ERROR,
  ADD_PRODUCT_SUCCESS,
  GET_PRODUCTS,
  GET_PRODUCTS_ERROR,
  GET_PRODUCTS_SUCCESS,
} from '../types/types';

import axiosClient from '../config/axios';
import Swal from 'sweetalert2';

export function addProductAction(product) {
  return async (dispatch) => {
    dispatch(addProduct());

    try {
      await axiosClient.post('/products', product);
      dispatch(addProductSuccess(product));
      Swal.fire('Correct', 'El producto se agrego correctamente', 'success');
    } catch (error) {
      console.log(error);
      dispatch(addProductError(error));
      Swal.fire({
        icon: 'error',
        title: 'Hubo un error',
        text: 'Hubo un error',
      });
    }
  };
}

const addProduct = () => ({
  type: ADD_PRODUCT,
  payload: true,
});

const addProductSuccess = (product) => ({
  type: ADD_PRODUCT_SUCCESS,
  payload: product,
});

const addProductError = () => ({
  type: ADD_PRODUCT_ERROR,
  payload: false,
});

// GEt the products
export function getProductsAction() {
  return async (dispatch) => {
    dispatch(getProducts());
    try {
      const response = await axiosClient.get('/products');
      console.log(response.data);
      dispatch(getProductsSuccess(response.data));
    } catch (error) {
      console.log(error);
      dispatch(getProductsError());
    }
  };
}

const getProducts = () => ({
  type: GET_PRODUCTS,
  payload: true,
});

const getProductsSuccess = (products) => ({
  type: GET_PRODUCTS_SUCCESS,
  payload: products,
});

const getProductsError = () => ({
  type: GET_PRODUCTS_ERROR,
  payload: true,
});
