import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import styled from "styled-components";
import { Heading } from "../../header/Heading";
import { HeadBoard } from "./HeadBoard";

const HeadboardWrapper = styled.div`
  height: 90vh;
`;
export const Home = () => {
  return (
    <HeadboardWrapper className="head-board">
      <Stack>
        <Grid container>
          <Grid item md={12}>
            <HeadBoard />
          </Grid>
        </Grid>
        <Grid container>
          <Grid item sm={12} md={8}>
            {" "}
          </Grid>
          <Grid item sm={12} md={4}>
            <Box
              sx={{
                backgroundColor: "#fff",
                padding: "30px",
                borderRadius: "8px",
              }}
            >
              <Heading size={32} fontWeight={400}>
                How Elephanto Works
              </Heading>
              <Button sx={{ padding: 0 }} variant="link">
                Read Here
              </Button>
            </Box>
          </Grid>
        </Grid>
        <Box sx={{ borderTop: "4px solid gray" }} mt={3}>
          <Grid container>
            <Grid item sm={12} md={6}>
              <Box
                sx={{
                  padding: "50px 50px 50px 0px",
                }}
              >
                <Heading size={44} fontWeight={900}>
                  Elephanto is world's{" "}
                  <span sx={{ color: "#1976d2 !important" }}>
                    #1 security products
                  </span>{" "}
                  and service company
                </Heading>
              </Box>
            </Grid>
            <Grid item sm={12} md={6}>
              <Box sx={{ borderLeft: "4px solid gray" }}>
                <Stack spacing={4} p={"50px 0px 50px 50px"}>
                  <Typography variant="body1">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into publishing software like Aldus
                    PageMaker including versions of Lorem Ipsum.
                  </Typography>
                  <Typography variant="body1">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less Various versions have evolved over the years,
                    sometimes by accident, sometimes on purpose (injected humour
                    and the like).
                  </Typography>
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Grid container mt={8}>
          <Grid item sm={12} md={6}>
            <Heading size={48} fontWeight={900}>
              Elephanto features
            </Heading>
          </Grid>
          <Grid item sm={12} md={6}>
            <Typography variant="body1">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less Various
              versions have evolved over the years.
            </Typography>
          </Grid>
        </Grid>
        <Grid container mt={4} spacing={4}>
          <Grid item sm={12} md={4}>
            <div className="image-card">
              <img src="https://images.unsplash.com/photo-1528312635006-8ea0bc49ec63?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80" />
              <Heading size={32} fontWeight={900}>
                features 1
              </Heading>
              <Typography variant="body1">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                Various versions have evolved over the years.
              </Typography>
            </div>
          </Grid>
          <Grid item sm={12} md={4}>
            <div className="image-card">
              <img src="https://images.unsplash.com/photo-1633194883650-df448a10d554?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=376&q=80" />
              <Heading size={32} fontWeight={900}>
                features 1
              </Heading>
              <Typography variant="body1">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                Various versions have evolved over the years.
              </Typography>
            </div>
          </Grid>
          <Grid item sm={12} md={4}>
            <div className="image-card">
              <img src="https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" />
              <Heading size={32} fontWeight={900}>
                features 1
              </Heading>
              <Typography variant="body1">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                Various versions have evolved over the years.
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Stack>
    </HeadboardWrapper>
  );
};
