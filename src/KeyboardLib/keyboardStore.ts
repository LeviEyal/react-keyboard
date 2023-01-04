import create from "zustand";

export interface KeyboardStore {
	isShiftPressed: boolean;
	isCtrlPressed: boolean;
	isCapsLockPressed: boolean;
	isShowKeyboard: boolean;
	currentInputField: HTMLInputElement | null;
	layout: string;
	setCurrentInputField: (inputField: HTMLInputElement) => void;
	openKeyboard: () => void;
	closeKeyboard: () => void;
	toggleCapsLock: () => void;
	setLayout: (layout: string) => void;
}

export const useKeyboardStore = create<KeyboardStore>((set) => ({
	isShiftPressed: false,
	isCtrlPressed: false,
	isShowKeyboard: false,
	isCapsLockPressed: false,
	currentInputField: null,
	layout: "en",
	setCurrentInputField: (inputField: HTMLInputElement) =>
		set({ currentInputField: inputField }),
	openKeyboard: () => set({ isShowKeyboard: true }),
	closeKeyboard: () => set({ isShowKeyboard: false }),
	toggleCapsLock: () =>
		set((state) => ({ isCapsLockPressed: !state.isCapsLockPressed })),
	setLayout: (layout: string) => set({ layout: layout }),
}));

export const useKeyboard = () => {
	const { openKeyboard, setCurrentInputField, setLayout } = useKeyboardStore();

	return {
		register: (layout: string) => {
			return {
				onFocus: (e: React.FocusEvent<HTMLInputElement>) => {
					setCurrentInputField(e.target as HTMLInputElement);
					setLayout(layout);
					openKeyboard();
				},
			};
		},
	};
};
