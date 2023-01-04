import { useEffect, useRef, useState } from "react";
import logo from "./logo.svg";
import { useKeyboard } from "./KeyboardLib/keyboardStore";
import { Posts } from "./posts/Posts";

function App() {
	const { register } = useKeyboard();
	const [name, setName] = useState<string>("");
	const ageRef = useRef<HTMLInputElement>(null);
	const classRef = useRef<HTMLInputElement>(null);
	const universityRef = useRef<HTMLInputElement>(null);

	return (
		<div className="App">
			<form
				className="bg-slate-500 flex"
				onSubmit={(e) => {
					e.preventDefault();
					alert(
						`name: ${name}, age: ${ageRef.current?.value}, class: ${classRef.current?.value}, university: ${universityRef.current?.value}`
					);
				}}
			>
				<input
					className="border m-5"
					placeholder="name"
					{...register("default")}
					type="text"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
				<input
					ref={ageRef}
					className="border m-5"
					placeholder="age"
					{...register("numbers")}
					type="number"
				/>
				<input
					ref={classRef}
					className="border m-5"
					placeholder="class"
					{...register("default")}
					type="text"
				/>
				<input
					ref={universityRef}
					className="border m-5"
					placeholder="university"
					{...register("default")}
					type="text"
				/>
				<button type="submit">submit</button>
			</form>
			<Posts />
		</div>
	);
}

export default App;
