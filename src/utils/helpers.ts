const arrowKeycodes = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];

export const isArrowKey = (keycode: string) => {
	if (arrowKeycodes.includes(keycode)) return true;
	return false;
};

export const movePoint = (
	keycode: string,
	up: () => void,
	down: () => void,
	left: () => void,
	right: () => void
) => {
	switch (keycode) {
		case arrowKeycodes[0]:
			up();
			break;
		case arrowKeycodes[1]:
			down();
			break;
		case arrowKeycodes[2]:
			left();
			break;
		case arrowKeycodes[3]:
			right();
			break;
	}
};