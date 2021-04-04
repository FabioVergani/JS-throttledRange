# JS-throttledRange
A functional controller for throttle inpunt range values.

## Usage:
```
const throttledRange = throttleRange(
	htmlInputRangeElement,
	(current,prev) => {
		console.log('value:%O',{current,prev);
	},
);
```
