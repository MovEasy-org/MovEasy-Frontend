import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";
import { ChakraProvider } from "@chakra-ui/react";

const App = () => {
	return (
		<ChakraProvider>
			<Router>
				<Routes />
			</Router>
		</ChakraProvider>
	);
};

export default App;
