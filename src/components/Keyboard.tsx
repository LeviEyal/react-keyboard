import { useKeyboardStore } from "../KeyboardLib/keyboardStore";
import { EnglishKeyboard } from "./EnglishKeyboard";
import { NumbersKeyboard } from "./NumbersKeyboard";

export const Keyboard = () => {
	const { isShowKeyboard, layout } = useKeyboardStore();
	if (!isShowKeyboard || !layout) return null;
	if (layout === "numbers") return <NumbersKeyboard />;
	return <EnglishKeyboard />;
};
