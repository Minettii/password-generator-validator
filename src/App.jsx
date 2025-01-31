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
		chars += { lowercaseChars };
	}
	if (uppercase) {
		chars += { uppercaseChars };
	}
	if (number) {
		chars += { numberChars };
	}
	if (symbol) {
		chars += { symbolChars };
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
	const [password, setPassword] = useState("");
	return <></>;
}
