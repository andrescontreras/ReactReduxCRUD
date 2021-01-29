import {
  ADD_PRODUCT,
  ADD_PRODUCT_ERROR,
  ADD_PRODUCT_SUCCESS,
  GET_PRODUCTS,
  GET_PRODUCTS_ERROR,
  GET_PRODUCTS_SUCCESS,
  GET_DELETE_PRODUCT,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_ERROR,
  GET_EDIT_PRODUCT,
  EDIT_PRODUCT,
  EDIT_PRODUCT_SUCCESS,
  EDIT_PRODUCT_ERROR,
} from '../types/types';

import axiosClient from '../config/axios';
import Swal from 'sweetalert2';
import Product from '../components/Product';

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

export function deleteProductAction(id) {
  return async (dispatch) => {
    dispatch(getDeleteProduct(id));
    try {
      const request = await axiosClient.delete(`/products/${id}`);
      console.log(request);
      dispatch(getDeleteProductSuccess());
      Swal.fire('Borrado', 'Producto borrado', 'success');
    } catch (error) {
      console.log(error);
      dispatch(getDeleteProductError(error));
      Swal.fire('Error al borrar', 'Error al borrar el producto', 'error');
    }
  };
}

const getDeleteProduct = (id) => ({
  type: GET_DELETE_PRODUCT,
  payload: id,
});

const getDeleteProductSuccess = () => ({
  type: DELETE_PRODUCT_SUCCESS,
});

const getDeleteProductError = (error) => ({
  type: DELETE_PRODUCT_ERROR,
  payload: true,
});

export function getEditProductAction(product) {
  return async (dispatch) => {
    dispatch(getEditProduct(product));
  };
}

export function editProductAction(product) {
  return async (dispatch) => {
    dispatch(editProduct(product));
    try {
      const request = await axiosClient.put(`/products/${product.id}`, product);
      dispatch(editProductSuccess(request));
    } catch (error) {
      console.log(error);
      dispatch(editProductError());
    }
  };
}

const getEditProduct = (product) => ({
  type: GET_EDIT_PRODUCT,
  payload: product,
});

const editProduct = (product) => ({
  type: EDIT_PRODUCT,
  payload: product,
});

const editProductSuccess = (product) => ({
  type: EDIT_PRODUCT_SUCCESS,
  payload: product,
});

const editProductError = () => ({
  type: EDIT_PRODUCT_ERROR,
  payload: true,
});
