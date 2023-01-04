import { useKeyboardStore } from "../KeyboardLib/keyboardStore";
import {
	ActionKey,
	CapsLockKey,
	CharKey,
	CloseKey,
	DeleteKey,
	Key,
} from "../KeyboardLib/KeyboardUtils";

export const EnglishKeyboard = () => {
	const { isShowKeyboard } = useKeyboardStore();
	if (!isShowKeyboard) return null;

	return (
		<div className="fixed bottom-0 left-0 w-full h-1/3 bg-gray-200 flex flex-col flex-wrap justify-center items-center">
			<div>
				{[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((num) => (
					<Key
						className="bg-blue-500 hover:bg-blue-300 hover:text-blue-800 text-white font-bold py-2 px-4 m-1 rounded inline-flex items-center"
						char={num}
					>
						{num}
					</Key>
				))}
				<DeleteKey className="bg-red-500 hover:bg-red-300 hover:text-red-800 text-white font-bold py-2 px-4 m-1 rounded inline-flex items-center">
					Delete
				</DeleteKey>
			</div>
			<div>
				{["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"].map((letter) => (
					<CharKey
						className="bg-blue-500 hover:bg-blue-300 hover:text-blue-800 text-white font-bold py-2 px-4 m-1 rounded inline-flex items-center"
						char={letter}
					>
						{letter}
					</CharKey>
				))}
			</div>
			<div>
				<CapsLockKey>Caps Lock</CapsLockKey>
				{["a", "s", "d", "f", "g", "h", "j", "k", "l"].map((letter) => (
					<CharKey
						className="bg-blue-500 hover:bg-blue-300 hover:text-blue-800 text-white font-bold py-2 px-4 m-1 rounded inline-flex items-center"
						char={letter}
					>
						{letter}
					</CharKey>
				))}
			</div>
			<div>
				{["z", "x", "c", "v", "b", "n", "m"].map((letter) => (
					<CharKey
						className="bg-blue-500 hover:bg-blue-300 hover:text-blue-800 text-white font-bold py-2 px-4 m-1 rounded inline-flex items-center"
						char={letter}
					>
						{letter}
					</CharKey>
				))}
			</div>
			<CloseKey className="absolute top-0 right-0 bg-cyan-500 hover:bg-cyan-300 hover:text-cyan-800 text-white font-bold py-2 px-4 m-1 rounded inline-flex items-center">
				❌
			</CloseKey>
		</div>
	);
};
