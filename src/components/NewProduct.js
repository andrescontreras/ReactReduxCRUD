import React, { useState } from 'react';
import { addProductAction } from '../actions/productsActions';
import { useDispatch, useSelector } from 'react-redux';
const NewProducts = () => {
  const [name, saveName] = useState('');
  const [cost, saveCost] = useState(0);

  const dispatch = useDispatch();

  const addProduct = (product) => dispatch(addProductAction(product));

  const onSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === '' || cost <= 0) {
      return;
    }
    console.log('******');
    addProduct({
      name,
      cost,
    });
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">
              Agregar nuevo producto
            </h2>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewProducts;
