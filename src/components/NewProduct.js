import React, { useState } from 'react';
import { addProductAction } from '../actions/productsActions';
import { createAlert, hideAlertAction } from '../actions/alertActions';
import { useDispatch, useSelector } from 'react-redux';

const NewProducts = ({ history }) => {
  const [name, saveName] = useState('');
  const [cost, saveCost] = useState(0);

  const dispatch = useDispatch();

  /// data of state
  const loading = useSelector((state) => state.products.loading);
  const error = useSelector((state) => state.products.error);
  const alert = useSelector((state) => state.alert.alert);

  const addProduct = (product) => dispatch(addProductAction(product));

  const onSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === '' || cost <= 0) {
      const alert = {
        message: 'Ambos campos son obligatorios',
        class: 'alert alert-danger text-center text-uppercase p3',
      };
      dispatch(createAlert(alert));
      return;
    }
    console.log('******');
    dispatch(hideAlertAction());
    addProduct({
      name,
      cost,
    });

    history.push('/');
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">
              Agregar nuevo producto
            </h2>
            {alert ? <p className={alert.class}> {alert.message} </p> : null}
            <form onSubmit={onSubmit}>
              <div className="form-group">
                <label>Nombre Producto</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre Producto"
                  name="name"
                  value={name}
                  onChange={(e) => saveName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Precio Producto</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Precio Producto"
                  name="cost"
                  value={cost}
                  onChange={(e) => saveCost(Number(e.target.value))}
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary font-weight text-uppercase d-block w-100"
              >
                Aregar
              </button>
            </form>
            {loading ? <p>Cargando...</p> : null}
            {error ? (
              <p className="alert alert-danger p2 mt-4 text-center">
                Hubo un error
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewProducts;
