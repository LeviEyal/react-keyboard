import { useEffect, useRef, useState } from "react";
import { useKeyboard } from "../KeyboardLib/keyboardStore";

export const Posts = () => {
	const { register } = useKeyboard();
	const userNameRef = useRef<HTMLInputElement>(null);

	return (
		<div>
			<input
				ref={userNameRef}
				{...register("default")}
				type="text"
				placeholder="User Name"
				defaultValue="Eyal Levi"
			/>
			<button
				onClick={() => {
					alert(userNameRef.current?.value || "No value");
				}}
			>
				Show Value
			</button>
		</div>
	);
};
