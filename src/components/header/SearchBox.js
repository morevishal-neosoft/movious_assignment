import { Search } from "@mui/icons-material";
import { Stack } from "@mui/material";
import { useState } from "react";
import styled from "styled-components";
import ProductsData from "./../../__mock__/products.json";
import { Heading } from "./Heading";

const SearchBoxWrapper = styled.div`
  // background-color: #eee;
  padding: 10px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  height: 44px;
`;
const SearchBoxInputBase = styled.input`
  border: none;
  background-color: transparent;
  outline: none;
  color: #afafaf;
  font-size: 16px;
  margin-left: 10px;
  flex-grow: 1;
`;
const SearchIconWrapper = styled(Search)`
  font-size: 16px;
  color: #afafaf;
`;
const Container = styled(Stack)`
  position: relative;
  color: #2c2c2c;
`;
const SuggestionWrapper = styled(Stack)`
  max-height: 200px;
  overflow-y: scroll;
  z-index: 999;
  position: absolute;
  background-color: #fff;
  top: 50px;
  left: 0px;
  right: 0px;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0px 5px 20px 0px rgba(109, 110, 111, 0.28);
`;

export const SearchBox = () => {
  const [matchingProducts, setMatchingProducts] = useState([]);
  const handleOnChange = (event) => {
    const { value } = event.target;
    if (value) {
      const matchedProduct = ProductsData.filter(
        (item) => item.name.includes(value) || item.detail.includes(value)
      );
      setMatchingProducts(matchedProduct);
    } else {
      setMatchingProducts([]);
    }
  };
  return (
    <Container>
      <SearchBoxWrapper>
        <SearchIconWrapper></SearchIconWrapper>
        <SearchBoxInputBase
          onChange={handleOnChange}
          placeholder="Search products"
        ></SearchBoxInputBase>
      </SearchBoxWrapper>
      {matchingProducts && matchingProducts.length > 0 && (
        <SuggestionWrapper gap={1}>
          {matchingProducts.map((item) => (
            <MatchingResultCard key={item.name} {...item} />
          ))}
        </SuggestionWrapper>
      )}
    </Container>
  );
};

const MatchingResultCard = ({ name, detail }) => {
  return (
    <Stack>
      <Heading size={12} fontWeight={800}>
        {name}
      </Heading>
      <Heading size={12} fontWeight={400}>
        {detail.substring(0, 28)}
      </Heading>
    </Stack>
  );
};
