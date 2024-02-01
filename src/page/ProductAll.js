import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { Col, Container, Row } from "react-bootstrap";
import { useSearchParams } from 'react-router-dom';

const ProductAll = () => {
  const [query, setQuery] = useSearchParams();


  const [allProducts, setAllProducts] = useState(null);
  const getAllProducts = async () => {
    let searchQuery = query.get("q") || "";
    console.log(searchQuery)
    let url = ``;
    if(searchQuery === "") {
      url = `http://52.79.235.118:8080/v1/api/product-category?category=전체&size=100&page=0`;
    }else {
      url = `http://52.79.235.118:8080/v1/api/product-keyword?keyword=${searchQuery}&size=100&page=0`
    }
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.product_list.content);
    setAllProducts(data.product_list.content);
  };

  useEffect(() => {
    getAllProducts();
  }, [query]);

  return (
    <div>
      <Container>
        <Row>
          {allProducts &&
            allProducts.map((product) => (
              <Col lg={3}>
                <ProductCard key={product.product_id} product={product} />
              </Col>
            ))}
        </Row>
      </Container>
    </div>
  );
};

export default ProductAll;
