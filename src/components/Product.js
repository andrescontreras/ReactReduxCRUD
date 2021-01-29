import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteProductAction } from '../actions/productsActions';
import Swal from 'sweetalert2';
const Product = ({ product }) => {
  const { name, cost, id } = product;

  const dispatch = useDispatch();

  const onClickDelete = () => {
    confirDeleteProduct();
  };

  const confirDeleteProduct = () => {
    Swal.fire({
      title: 'Borrar',
      text: 'Esta seguro de borrar',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Aceptar',
    }).then((result) => {
      if (result.value) {
        dispatch(deleteProductAction(id));
      }
    });
  };

  return (
    <tr>
      <td>{name}</td>
      <td>
        <span className="font-weight-bold">$ {cost}</span>
      </td>
      <td className="acciones">
        <Link to={`/products/edit/${id}`} className="btn btn-primary mr-2">
          Editar
        </Link>
        <button
          type="button"
          className="btn btn-danger"
          onClick={onClickDelete}
        >
          Eliminar
        </button>
      </td>
    </tr>
  );
};

export default Product;
