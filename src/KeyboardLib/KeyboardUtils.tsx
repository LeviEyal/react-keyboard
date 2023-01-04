import { useKeyboardStore } from "./keyboardStore";

interface IkeyProps {
	char: string | number;
	className?: string;
	children: React.ReactNode;
}

export const Key = ({ char, className, children }: IkeyProps) => {
	const { isShowKeyboard, currentInputField, closeKeyboard } =
		useKeyboardStore();

	const handleKeyboardClick = (key: string | number) => {
		if (currentInputField) {
			currentInputField.value += key;
		}
	};

	return (
		<button
			className={className}
			onClick={() => {
				handleKeyboardClick(char);
			}}
		>
			{children}
		</button>
	);
};

// ******************************************************
interface ICharkeyProps {
	char: string | number;
	className?: string;
	children: React.ReactNode;
}

export const CharKey = ({ char, className, children }: IkeyProps) => {
	const {
		isShowKeyboard,
		currentInputField,
		closeKeyboard,
		isCapsLockPressed,
	} = useKeyboardStore();

	const handleKeyboardClick = (key: string | number) => {
		if (currentInputField) {
			if (isCapsLockPressed) {
				currentInputField.value += key.toString().toUpperCase();
			} else {
				currentInputField.value += key;
			}
		}
	};

	return (
		<button
			className={className}
			onClick={() => {
				handleKeyboardClick(char);
			}}
		>
			{children}
		</button>
	);
};

// ******************************************************

interface IActionKeyProps {
	onClick: () => void;
	className?: string;
	children: React.ReactNode;
}

export const ActionKey = ({
	onClick,
	className,
	children,
}: IActionKeyProps) => {
	return (
		<button className={className} onClick={onClick}>
			{children}
		</button>
	);
};

// ******************************************************

export interface IDeleteKeyProps {
	onClick?: () => void;
	className?: string;
	children: React.ReactNode;
}

export const DeleteKey = ({
	onClick,
	className,
	children,
}: IDeleteKeyProps) => {
	const { currentInputField } = useKeyboardStore();
	return (
		<ActionKey
			className={className}
			onClick={() => {
				if (currentInputField) {
					currentInputField.value = currentInputField.value.slice(0, -1);
				}
			}}
		>
			{children}
		</ActionKey>
	);
};

// ******************************************************

export interface ICloseKeyProps {
	onClick?: () => void;
	className?: string;
	children: React.ReactNode;
}

export const CloseKey = ({ onClick, className, children }: ICloseKeyProps) => {
	const { closeKeyboard } = useKeyboardStore();
	return (
		<ActionKey className={className} onClick={closeKeyboard}>
			{children}
		</ActionKey>
	);
};

// ******************************************************

export interface ICapsLockKeyProps {
	onClick?: () => void;
	className?: string;
	children: React.ReactNode;
}

export const CapsLockKey = ({
	onClick,
	className,
	children,
}: ICapsLockKeyProps) => {
	const { isCapsLockPressed, toggleCapsLock } = useKeyboardStore();
	return (
		<ActionKey
			className={
				className +
				(isCapsLockPressed ? " bg-black text-white" : "bg-slate-600")
			}
			onClick={() => {
				toggleCapsLock();
			}}
		>
			{children}
		</ActionKey>
	);
};
