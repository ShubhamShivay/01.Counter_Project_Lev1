import "./App.css";
import { useState } from "react";
import React from "react";

function App() {
	const [counter, setcounter] = useState(0);

	//Increase
	const increase = () => {
		if (counter != 20) {
			setcounter(counter + 1);
		}
	};
	//Decrease
	const decrease = () => {
		if (counter !== 0) {
			setcounter(counter - 1);
		}
	};

	// reset
	const reset = () => {
		return setcounter(0);
	};
	return (
		<>
			<div className="border-4 py-[60px] border-red-600 bg-green-300">
				<h1 className="text-4xl font-bold underline">Counter Project</h1>
				<div className="text-3xl mt-[10px]">Counter Value: {counter}</div>
				<div className="mt-[20px]">
					<button
						onClick={increase}
						className="border-0 rounded-[5px] hover:bg-sky-700 mr-[5px] p-[5px] bg-red-600"
					>
						Increase
					</button>
					<button
						onClick={decrease}
						className="border-0 rounded-[5px] hover:bg-sky-700 mr-[5px] p-[5px] bg-red-600"
					>
						decrease
					</button>
					<button
						onClick={reset}
						className="border-0 rounded-[5px] hover:bg-sky-700 py-[5px] px-[12px] bg-red-600"
					>
						Reset
					</button>
				</div>
			</div>
		</>
	);
}

export default App;
