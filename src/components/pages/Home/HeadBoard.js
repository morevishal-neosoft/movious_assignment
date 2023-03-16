import { Grid } from "@mui/material";
import styled from "styled-components";
import { HighlightButton } from "../../custom/Button";
import { Heading } from "../../header/Heading";

const Wrapper = styled.div`
  padding: 50px;
`;
export const HeadBoard = () => {
  return (
    <Wrapper>
      <Heading size={72} fontWeight="600">
        Brows. Apply.
      </Heading>
      <Heading size={72} fontWeight="600">
        Secure your future.
      </Heading>
      <Grid mt={4} container>
        <Grid item sm={12} md={6}>
          <Heading size={18} fontWeight="500">
            Millions of people are searching for secure, relible security
            solution. See what world class products we offer on <b>Elephanto</b>
          </Heading>
        </Grid>
      </Grid>
      <Grid container mt={2}>
        <Grid item>
          <HighlightButton variant="contained">Take a look</HighlightButton>
        </Grid>
      </Grid>
    </Wrapper>
  );
};
