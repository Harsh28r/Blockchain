
// import { Link } from "react-router-dom";
import React, { useEffect, useState } from 'react';
// import BlockchainContext from "../context/BlockChainContext";
// import globalContext from "../context/GlobalContext";
import { useNavigate } from 'react-router-dom';

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,  
  CardFooter,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Col,
  // CardTitle,Row
} from "reactstrap";


import IndexNavbar from "components/Navbars/IndexNavbar";
// core components

// function SignUp(props) {
  function SignUp({ location }){
  // const {  accounts, contract } = useContext(BlockchainContext);
  // const { SET_USER } = useContext(globalContext);

  const navigate = useNavigate();
  const [firstFocus, setFirstFocus] = React.useState("");
  const [lastFocus, setLastFocus] = React.useState("");
  const [email_in,setEmail_in] = React.useState("");
  const[pass_in,setPass_in] = useState("");
  // const [emailFocus,setEmailFocus]= useState(false);
  const storedEmail = localStorage.getItem('email');
  const storedPassword = localStorage.getItem('password');
// const formSubmit = ("");
//  => {
  //   // Your login logic here
  
  //   // Redirect to the next page
  //   navigate.push('/next-page');
  
  //   // Store login data (example using local storage)
  //   localStorage.setItem('email', email_in);
  //   localStorage.setItem('password', pass_in);
  // };
  

  const handleLogin = () => {
    if (location && location.aboutProps) {
      const userType = location.aboutProps["name"];
      if (userType === 'Hospital') {
        navigate('/hospitalhome');
      } else if (userType === 'Blood Bank') {
        navigate('/bloodbankhome');
      }
    }
  };
  

  // const history = useNavigate();
  // const handleClick = () => {
  //   history.push("/bloodbankHome");
  // };


  //metamask detect and open 
    useEffect(() => {
      // Check if MetaMask is installed
      if (typeof window.ethereum !== 'undefined') {
        // MetaMask is installed
        const openMetaMask = async () => {
          try {
            // Request access to the user's MetaMask account
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            console.log('MetaMask connected with account:', accounts[0]);
          } catch (error) {
            console.error('Error connecting to MetaMask:', error);
          }
        };
  
        // Trigger MetaMask connection
        openMetaMask();
      } else {
        // MetaMask is not installed
        console.error('MetaMask is not installed.');
      }
    }, []);


    

    React.useEffect(() => {
      document.body.classList.add("login-page");
      document.body.classList.add("sidebar-collapse");
      document.documentElement.classList.remove("nav-open");
      window.scrollTo(0, 0);
      document.body.scrollTop = 0;
      return function cleanup() {
        document.body.classList.remove("login-page");
        document.body.classList.remove("sidebar-collapse");
      };
    }, []);

  //   // agar null rhega toh it will login as blood bank
  // try {
  //   var n = props.location.aboutProps["name"];
  //   console.log(n);
  // } catch (e) {
  //   props.location.aboutProps = {};
  //   props.location.aboutProps["name"] = "Blood bank";
  // }

     
   
  
      // var account_data1 = await contract.methods.getUserCount().call();
      // console.log(account_data1);
  
      // if (email_in.trim() !== "" && pass_in.trim() !== "") {
      //   try {
      //     var account_data = await contract.methods
      //       .getLogin(accounts[0], email_in.toString(), pass_in.toString())
      //       .call();
  
  
    //       var current_user = {
    //           name: account_data[0],
    //           email: email_in.toString(),
    //           type: account_data[1],
    //           add: account_data[2],
    //           no: account_data[3],
    //           location: account_data[4],
    //         };
    //         console.log("current_user", current_user);
    //         SET_USER(current_user);
  
            
    //       if (props.location.aboutProps["name"] === "Blood bank") {
    //         history.push("/bloodbankhome");
    //       } else {
    //         history.push("/hospitalhome");
    //       }
    //     } catch (err) {
    //       console.log("Error in creation", err);
    //     }
    //   } else {
    //     alert(`${"Enter Valid credentials"}`);
    //   }
    // };
       
  
    return (

    <>
    
      <IndexNavbar urlname="login-page" />
      <div className="page-header clear-filter" filter-color="blue">
        <div
          className="page-header-image"
          style={{
            backgroundImage:
              "url(" + require("assets/img/login.jpg") + ")",
          }}
        ></div>
        <div className="content">
          <Container>
            <Col className="ml-auto mr-auto" md="4">
              <Card className="card-login card-plain">
                <Form action="" className="form" method="">
                  <CardHeader className="text-center">
                    <div className="logo-container">
                      <img
                        alt="..."
                        src={require("assets/img/now-logo.png") }
                      ></img>
                    </div>
                  </CardHeader>
                  <CardBody>
                    <InputGroup
                      className={
                        "no-border input-lg" +
                        (firstFocus ? " input-group-focus" : "")
                      }
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons users_circle-08"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Email ID  ..."
                        type="email"
                        name="email"
                        value={email_in}
                        onChange={(event) => setEmail_in(event.target.value)}
                        onFocus={() => setFirstFocus(true)}
                        onBlur={() => setFirstFocus(false)}
                      ></Input>
                    </InputGroup>
                    <InputGroup
                      className={
                        "no-border input-lg" +
                        (lastFocus ? " input-group-focus" : "")
                      }
                    >
                       <Input
                        placeholder="password ..."
                        type="password"
                        name="password"
                        value={pass_in}
                        onChange={(event) => setPass_in(event.target.value)}
                        onFocus={() => setLastFocus(true)}
                        onBlur={() => setLastFocus(false)}
                      ></Input>
                    </InputGroup>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      block
                      className="btn-round"
                      color="info"
                      // onClick={handleLogin}
                      onClick={(e) => {
                        e.preventDefault();
                        window.location.href="/bloodbankHome";
                        }}
                      // onClick={handleClick}
                      // onClick={populate_data}
                      // onClick={async (event) => {
                      //   var ad = await contract.methods.getUserCount().call();
                      //   console.log(ad);
                      // }}
                    > Login as
                      {location && location.aboutProps ? location.aboutProps["name"] : ""}
                    </Button>
                            
                    <div className="pull-right">
                      <h6>
                        <a className="link" onClick={(e) => e.preventDefault()}>
                          Need Help?
                        </a> 
                      </h6>
                    </div>
                  </CardFooter>
                </Form>
              </Card>
            </Col>
          </Container>
        </div>
      </div>
    </>
    );
  }; 
export default SignUp;





