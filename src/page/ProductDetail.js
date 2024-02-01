import React, { useEffect, useState } from "react";
import { Button, Col, Container, Dropdown, Row } from "react-bootstrap";
import { useParams, useSearchParams } from "react-router-dom";

const ProductDetail = () => {
  let { id } = useParams();
  const [productDetail, setProductDetail] = useState(null);

  const getProductDerail = async () => {
    let url = `http://52.79.235.118:8080/v1/api/product-detail/${id}`;
    const res = await fetch(url);
    const data = await res.json();
    setProductDetail(data);
    console.log(data);
  };

  useEffect(() => {
    getProductDerail();
  }, []);

  return (
    <div>
      <Container className="product-detail-container">
        <Row>
          <Col sm={5}>
            <img
              src={productDetail?.productPhoto[0].photo_url}
              alt="productPhoto"
              width={300}
            />
          </Col>
          <Col sm={7}>
            <h2>{productDetail?.productName}</h2>
            <div className='product-detail-price'>\ {productDetail?.productPrice?.toLocaleString()}</div>
            <Dropdown>
              <Dropdown.Toggle variant="info" id="dropdown-basic">
                사이즈
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {productDetail &&
                  productDetail.productDetailList.map((item) => (
                    <Dropdown.Item href="#/action-1">{item.product_size}</Dropdown.Item>
                  ))}
              </Dropdown.Menu>
            </Dropdown>
            <Button variant="dark" className='add-button'>추가</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProductDetail;
