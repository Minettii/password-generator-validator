/* eslint-disable react/prop-types */
import styles from "./styles.module.scss";

export default function Button(props) {
	return (
		<button {...props} className={`${props.className} ${styles.btn}`}>
			{props.children}
		</button>
	);
}
