# JS-throttledRange
A functional controller for throttle input range values.
```
const throttledRange = throttleRange(
	htmlInputRangeElement,
	(current,prev) => {
		console.log('value:%O',{current,prev);
	},
);
```
