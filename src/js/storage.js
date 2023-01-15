const save = (key, value) => {
	try {
		const data = JSON.stringify(value);
		localStorage.setItem(key, data);
	} catch (error) {
		console.error(error.message);
	}
}

const load = (key) => {
	try {
		const data = localStorage.getItem(key);
		if (data === null) {
			return undefined;
		} else {
			return JSON.parse(data);
		}
	} catch (error) {
		console.error(error.message);
	}
}

export { save, load };