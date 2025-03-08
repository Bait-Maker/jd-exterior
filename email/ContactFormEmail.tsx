import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";

import styles from "./ContactFormEmail.module.css";

type Props = {
  name: string;
  message: string;
  phone: string;
  email: string;
};

const ContactFormEmail = ({ name, message, phone, email }: Props) => {
  return (
    <Html>
      <Head />
      <Preview>New Message from JD-Exterior contact form</Preview>
      <Body style={{ backgroundColor: "rgb(24, 26, 27)" }}>
        <Container>
          <Section
            style={{
              backgroundColor: "rgb(245, 245, 246)",
              color: "rgb(24, 26, 27)",
              margin: "2.5rem 0",
              padding: "1rem 2.5rem",
              borderRadius: "0.375rem",
            }}
          >
            <Heading style={{ lineHeight: "1.25" }}>
              You recieved the following message from the contact form
            </Heading>
            <Text>From: {name}</Text>
            <Text>Message: {message}</Text>
            <Hr />
            <Text>Sender's phone number: {phone}</Text>
            <Text>Sender's email: {email} </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default ContactFormEmail;
