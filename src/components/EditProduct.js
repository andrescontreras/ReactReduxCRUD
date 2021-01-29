import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editProductAction } from '../actions/productsActions';
import { useHistory } from 'react-router-dom';
const EditProducts = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [productState, saveProduct] = useState({
    name: '',
    cost: 0,
  });
  const product = useSelector((state) => state.products.editProduct);

  useEffect(() => {
    saveProduct(product);
  }, [product]);

  const onChangeForm = (e) => {
    saveProduct({
      ...productState,
      [e.target.name]: e.target.value,
    });
  };

  const { name, cost, id } = productState;

  const onClickSubmit = (e) => {
    e.preventDefault();
    editProduct();
  };

  const editProduct = () => {
    dispatch(editProductAction(productState));
    history.push('/');
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">
              Editar Producto
            </h2>
            <form onSubmit={onClickSubmit}>
              <div className="form-group">
                <label>Nombre Producto</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre Producto"
                  name="name"
                  value={name}
                  onChange={onChangeForm}
                />
              </div>
              <div className="form-group">
                <label>Precio Producto</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Precio Producto"
                  name="cost"
                  value={cost}
                  onChange={onChangeForm}
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary font-weight text-uppercase d-block w-100"
              >
                Guardar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProducts;
