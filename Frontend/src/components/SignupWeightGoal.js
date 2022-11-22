import { Box, Button, Heading } from "@chakra-ui/react";
import React from "react";
import SignupNavbar from "./SignupNavbar";
import "./SignupStyles.css";
import { useNavigate } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'
import { useDispatch } from "react-redux";
import { foodList } from "../actions/user_actions";

const SignupWeightGoal = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const userTarget = (target) => {
		dispatch(foodList(target));
	  };
	return (
        <div>
		<ChakraProvider>
			<SignupNavbar />
			<Box className="signupWrapper">
				<Box className="insideBox">
					<Heading fontSize="25px" mb="10px">
						What is your weight goal?
					</Heading>
					<Button
                        className = "btn-weighbg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
						colorScheme="blue"
						variant="outline"
						w="300px"
						my="20px"
						onClick={() => {
							userTarget("lose")
							navigate("/chart");
						}}
					>
						Lose Weight
					</Button>
					<Button
						colorScheme="blue"
						variant="outline"
						w="300px"
						mb="20px"
						onClick={() => {
							userTarget("maintain")
							navigate("/chart");
						}}
					>
						Maintain Weight
					</Button>
					<Button
						colorScheme="blue"
						variant="outline"
						w="300px"
						onClick={() => {
							userTarget("gain")
							navigate("/chart");
						}}
					>
						Gain Weight
					</Button>
				</Box>
			</Box>
		</ChakraProvider>
        </div>
	);
};

export default SignupWeightGoal;
