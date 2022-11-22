import { Box, Button, Heading } from "@chakra-ui/react";
import React from "react";
import SignupNavbar from "./SignupNavbar";
import "./SignupStyles.css";
import { useNavigate } from "react-router-dom";

const SignupWelcome = () => {
	const navigate = useNavigate();
	return (
		<div>
			<SignupNavbar />
			<Box className="signupWrapper">
				<Box className="insideBox">
					<Heading fontSize="25px">Welcome! Just a few</Heading>
					<Heading fontSize="25px">quick questions so we can customize</Heading>
					<Heading fontSize="25px">FitNTrack for you.</Heading>

					<Button bg="#0066EE" color="white" mt="40px" h = "40px" w="400px" onClick={() => navigate("/goal")}>
						Continue
					</Button>
				</Box>
			</Box>
		</div>
	);
};

export default SignupWelcome;
