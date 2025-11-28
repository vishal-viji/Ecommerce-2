import React from "react";
import { Card } from "react-bootstrap";
import {Link} from 'react-router-dom'


function ProductScreen({ product }) {
  return (
    <>
      <Card className="my-3 p-3 rounded">
        <Link to={`/product/${product._id}`}>
          <Card.Img src={product.image} />
        </Link>

        <Card.Body>
        <Link to={`/product/${product._id}`}>
            <Card.Title>
              <strong>{product.name}</strong>
            </Card.Title>
          </Link>

          <Card.Text as="h5">
            <div className="my-3">
              {product.rating} from {product.numReviews} reviews
            </div>
          </Card.Text>

          <Card.Text as="h6">
            <div className="my-3">
             Rs {product.price}
            </div>
          </Card.Text>

          <Card.Text as="h6">
          
            <Link className="my-3 text-success" to={`/product/${product._id}`}>
             View More
             </Link>
            
          </Card.Text>






        </Card.Body>
      </Card>
    </>
  );
}

export default ProductScreen;
