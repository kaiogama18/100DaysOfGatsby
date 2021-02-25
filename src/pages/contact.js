import {
  Button as ChakraButton,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Textarea as ChakraTextarea
} from "@chakra-ui/react";
import { defaultComponents, FormiumForm } from "@formium/react";
import { graphql } from "gatsby";
import React from "react";
import Layout from "../components/layout";
import { formium } from "../lib/formium";

function TextInput(props) {
  const { id, label, description, ...rest } = props;
  return (
    <FormControl id={id}>
      <FormLabel>{label} </FormLabel>
      <Input placeholder={label} {...rest} />
      <FormHelperText>{description}</FormHelperText>
    </FormControl>
  );
}

function TextArea(props) {
  const { id, label, description, ...rest } = props;
  return (
    <FormControl id={id}>
      <FormLabel>{label} </FormLabel>
      <ChakraTextarea {...rest} />
      <FormHelperText>{description}</FormHelperText>
    </FormControl>
  );
}

function Button(props) {
  return <ChakraButton mt={4} type="submit" colorScheme="orange" {...props} />;
}

const myComponents = {
  ...defaultComponents,
  TextInput,
  TextArea,
  Button,
};

const Contact = ({ data }) => {
  return (
    <Layout>
      <FormiumForm
        data={data.formiumForm}
        components={myComponents}
        onSubmit={async (values) => {
          await formium.submitForm("gatsby-challenge", values);
          alert("Sucess");
        }}
      />
    </Layout>
  );
};

export const query = graphql`
  {
    formiumForm(slug: { eq: "gatsby-challenge" }) {
      id
      createAt
      name
      projectId
      schema
      slug
      updateAt
      version
    }
  }
`;

export default Contact;
