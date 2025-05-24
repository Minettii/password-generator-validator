import { useState } from "react";
import styles from "./App.module.scss";

const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numberChars = "0123456789";
const symbolChars = "!\"'+-=@#$%^&*(){}[]|:;<>,.?/";

// TODO: check if at least one checked on event b4 calling, if not toast
function generatePassword(length, lowercase, uppercase, number, symbol) {
	let chars = "";
	if (lowercase) {
			chars += lowercaseChars;
		}
		if (uppercase) {
			chars += uppercaseChars;
		}
		if (number) {
			chars += numberChars;
		}
		if (symbol) {
			chars += symbolChars;
		}
	let password = "";
	for (let i = 0; i < length; i++) {
		const randomIndex = Math.floor(Math.random() * chars.length);
		password += chars[randomIndex];
	}
	return password;
}

//TODO: on event: toast if password hasnt been generated yet
//TODO: OR: copy display none until generated password
function copyPassword(password) {
	navigator.clipboard.writeText(password);
}

//TODO: if result div empty,placeholder validate password:, div and all rules are gray
export default function App() {
	const [passwordLength, setPasswordLength] = useState(12);
	const [lowercase, setLowercase] = useState(true);
	const [uppercase, setUppercase] = useState(true);
	const [numbers, setNumbers] = useState(true);
	const [symbols, setSymbols] = useState(true);
	const [password, setPassword] = useState("");

	const handleGeneratePassword = () => {
		// TODO: check if at least one checked on event b4 calling, if not toast
		const generatedPassword = generatePassword(
			passwordLength,
			lowercase,
			uppercase,
			numbers,
			symbols
		);
		setPassword(generatedPassword);
	};

	const handleCopyPassword = () => {
		copyPassword(password);
	};

	return (
		<div className={styles.wrapper}>
			<h1 className={styles.mainTitle}>Password Generator</h1>
			<div className="mb-3">
				<label htmlFor="passwordLength" className="form-label">
					Password Length:
				</label>
				<input
					type="number"
					className="form-control"
					id="passwordLength"
					value={passwordLength}
					onChange={(e) => setPasswordLength(e.target.value)}
				/>
			</div>
			<div className="mb-3 form-check">
				<input
					type="checkbox"
					className="form-check-input"
					id="lowercaseCheck"
					checked={lowercase}
					onChange={(e) => setLowercase(e.target.checked)}
				/>
				<label className="form-check-label" htmlFor="lowercaseCheck">
					Include Lowercase
				</label>
			</div>
			<div className="mb-3 form-check">
				<input
					type="checkbox"
					className="form-check-input"
					id="uppercaseCheck"
					checked={uppercase}
					onChange={(e) => setUppercase(e.target.checked)}
				/>
				<label className="form-check-label" htmlFor="uppercaseCheck">
					Include Uppercase
				</label>
			</div>
			<div className="mb-3 form-check">
				<input
					type="checkbox"
					className="form-check-input"
					id="numberCheck"
					checked={numbers}
					onChange={(e) => setNumbers(e.target.checked)}
				/>
				<label className="form-check-label" htmlFor="numberCheck">
					Include Numbers
				</label>
			</div>
			<div className="mb-3 form-check">
				<input
					type="checkbox"
					className="form-check-input"
					id="symbolCheck"
					checked={symbols}
					onChange={(e) => setSymbols(e.target.checked)}
				/>
				<label className="form-check-label" htmlFor="symbolCheck">
					Include Symbols
				</label>
			</div>
			<div className="mb-3">
				<label htmlFor="passwordResult" className="form-label">
					Generated Password:
				</label>
				<div className="input-group">
					<input
						type="text"
						className="form-control"
						id="passwordResult"
						value={password}
						readOnly
					/>
					<button
						className={`${styles.btn} btn btn-outline-secondary`}
						type="button"
						onClick={handleCopyPassword}
					>
						Copy
					</button>
				</div>
			</div>
			<div className={styles.buttonsContainer}>
				<button
					className={styles.btn}
					onClick={handleGeneratePassword}
				>
					Generate
				</button>
			</div>
		</div>
	);
}
