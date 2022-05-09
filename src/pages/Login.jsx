import styled from "styled-components";
import {mobile} from "../Responsive";
import {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { login } from "../Redux/apiCalls";
import { useNavigate } from "react-router-dom"

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.4),
      rgba(255, 255, 255, 0)
    ),
    url("https://images.unsplash.com/photo-1546238232-20216dec9f72?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHVwcGllc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  border-radius:2px;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;
  background-color : #F1E4D3;;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  text-align: center;
  color:#792823;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
  border-radius:2px;
  border:1px solid lightgray;
  background-color : #F1E4D3;;
  outline:none;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  border-radius:5px;
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
  color:#792823;
`;

const Error = styled.span`
  color: red;
`;

const  Login = () => {

  const navigate = useNavigate()

  const [email , setEmail] = useState('');
  const [password , setPassword] = useState('');
  // const [credentials , setCredentials] = useState({});
  const dispatch = useDispatch()

  const { isFetching, error } = useSelector((state) => state.user);
  const LoginHandler = (event) => {

    event.preventDefault()
    console.log('login clicked')
   

    login(dispatch , {email , password})
  }

  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input 
            type="email" 
            placeholder="email" 
            onChange = { (e) => setEmail(e.target.value)} 
            required 
          />
          <Input 
            type="password" 
            placeholder="password" 
            onChange = { (e) => setPassword(e.target.value)} 
            required 
          />
          <Button onClick={LoginHandler} disabled={isFetching}>LOGIN</Button>
          {error && <Error>Something went wrong...</Error>}
          <Link>FORGET PASSWORD?</Link>
          <Link onClick= {() => navigate("/register")}>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;