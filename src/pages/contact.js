import {
  FormControl,
  FormHelperText,
  FormLabel,
  Input
} from "@chakra-ui/react";
import React from "react";
import Layout from "../components/layout";

// function TextInput(props) {
//   const { id, label, description, ...rest } = props;
//   return (
//     <FormControl id={id}>
//       <FormLabel>{label} </FormLabel>
//       <Input placeholder={label} {...rest} />
//       <FormHelperText>{description}</FormHelperText>
//     </FormControl>
//   );
// }

// function TextArea(props) {
//   const { id, label, description, ...rest } = props;
//   return (
//     <FormControl id={id}>
//       <FormLabel>{label} </FormLabel>
//       <ChakraTextarea {...rest} />
//       <FormHelperText>{description}</FormHelperText>
//     </FormControl>
//   );
// }

// function Button(props) {
//   return <ChakraButton mt={4} type="submit" colorScheme="orange" {...props} />;
// }

// const myComponents = {
//   ...defaultComponents,
//   TextInput,
//   TextArea,
//   Button,
// };

// const Contact = ({ data }) => {
const Contact = () => {
  return (
    <Layout>
      <FormControl id="email" isRequired>
        <FormLabel>Name</FormLabel>
        <Input type="username" />
      </FormControl>
      <FormControl id="email" mt={5} isRequired>
        <FormLabel>Email address</FormLabel>
        <Input type="email" />
        <FormHelperText>We'll never share your email.</FormHelperText>
      </FormControl>

      {/* <FormiumForm
        data={data.formiumForm}
        components={myComponents}
        onSubmit={async (values) => {
          await formium.submitForm("gatsby-challenge", values);
          alert("Sucess");
        }}
      /> */}
    </Layout>
  );
};

// export const query = graphql`
//   {
//     formiumForm(slug: { eq: "gatsby-challenge" }) {
//       id
//       createAt
//       name
//       projectId
//       schema
//       slug
//       updateAt
//       version
//     }
//   }
// `;

export default Contact;
