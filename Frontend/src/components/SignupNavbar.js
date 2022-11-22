import { Box, Button, Flex, Image, Spacer } from "@chakra-ui/react";
import React from "react";
// import { useNavigate } from "react-router-dom";

const SignupNavbar = () => {
	// const navigate = useNavigate();
	return (
		<Box
			style={{
				boxShadow:
					"rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
				height: "65px",
                width:"100vw"
			}}
		>
			<Flex p="10px" m="auto" w="70%" alignItems="center">
				{/* <Image
					src=""
					alt="logo"
					w="200px"
					style={{ cursor: "pointer" }}
					// onClick={() => navigate("/")}
				/> */}
				<Spacer />
				{/* <Button
                    style = {{
                        backgroundColor: "#0066EE",
                        color:"white",
                        height:"30px",
                    }}
					colorScheme="black"
					variant="ghost"
					size="lg"
					// onClick={() => navigate("/")}
				>
					LOG IN
				</Button> */}
			</Flex>
		</Box>
	);
};

export default SignupNavbar;