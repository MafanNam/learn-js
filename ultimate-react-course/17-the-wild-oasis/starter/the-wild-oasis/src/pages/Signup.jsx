import styled from "styled-components";
import Heading from "../ui/Heading.jsx";
import Logo from "../ui/Logo.jsx";
import SignupForm from "../features/authentication/SignupForm.jsx";

const SignupLayout = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background-color: var(--color-grey-50);
`;

function Signup() {
  return <SignupLayout>
    <Logo/>
    <Heading as='h4'>Sign up your account</Heading>
    <SignupForm/>
  </SignupLayout>;
}

export default Signup;
