/* prettier-ignore */
const throttledRange = (element, callback, options) => {
  let 
    enabled,
    interval,
    previous = element.value;
  const
    {
      setInterval,
      clearInterval
    } = element.ownerDocument.defaultView,
		fn = () => {
			const current = element.value;
			if(current !== previous){
				callback(current,previous);
				previous = current;
			}
			clearInterval(interval);
			interval = null;
		},
    {
      delay,
      stopped
    } = options || {},
    ms = 0 > delay ? 150 : delay,
		throttle = () => {
			if(!interval){
				interval = setInterval(fn,ms);
			}
		},
		listen = bool => {
			element[`${bool ? 'add' : 'remove'}EventListener`]('input',throttle);
			enabled = bool;
		};
	if(!stopped){
		listen(true);
	};
	return Object.defineProperties(
    Object.create(null),
    {
      start:{
        value:() => {
          if(!enabled){
            listen(true);
          }
        },
      },
      stop:{
        value:() => {
          if(enabled){
            listen(false);
          }
        }
      },
      enabled:{
        get:() => enabled
      }
    }
  );
};
