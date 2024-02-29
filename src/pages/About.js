import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4">Welcome To My Resturant</Typography>
        <p>
Nestled in the heart of the city, Food Adda is an epitome of culinary excellence, offering a harmonious fusion of global flavors and local inspirations. Our meticulously curated menu celebrates the artistry of gastronomy, presenting an exquisite array of dishes crafted with the finest ingredients sourced from around the world. From innovative interpretations of classic favorites to avant-garde culinary creations, each dish is a symphony of taste and presentation, meticulously prepared to tantalize the senses and elevate the dining experience. With its elegant ambiance, impeccable service, and unwavering commitment to culinary innovation, Food Adda invites you on a captivating journey of gastronomic discovery, where every meal is a celebration of flavor, creativity, and unparalleled hospitality.
        </p>
        <br />
        <p>
Step into our elegantly appointed dining space, where the ambiance exudes sophistication and warmth, inviting you to savor every moment of your culinary journey. Our team of passionate chefs, led by renowned culinary experts, brings together a wealth of expertise and creativity, ensuring that every dish is a masterpiece of flavor and visual delight.
At Food Adda, we believe that dining is more than just a meal – it's an experience to be cherished. Whether you're celebrating a special occasion, indulging in a romantic dinner for two, or simply seeking a memorable culinary adventure, our commitment to excellence ensures that every visit is a culinary delight to remember.
        </p>
      </Box>
    </Layout>
  );
};

export default About;