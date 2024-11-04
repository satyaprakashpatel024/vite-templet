/* eslint-disable no-unused-vars */
import React from "react";

const App = () => {
	return (
		<>
			<div className="static w-[200px] bg-blue-400 h-[200px]"> static parent
				<div className="absolute w-[200px] bg-red-400 h-[200px] mt-5 ml-5">
					<p>Absolute child</p>
				</div>
			</div>
		<br />
		<br />
			<div className="absolute w-[200px] bg-blue-400 h-[200px]"> absolute parent
				<div className="absolute w-[200px] bg-red-400 h-[200px]">
					<p>Absolute child</p>
				</div>
			</div>
		</>
	);
};

export default App;
