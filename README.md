# Mastering React Class Components

These are my personal notes on mastering React's legacy Class components.
I'm using Scrimba's **Class Components in React** tutorial by **Bob Ziroll** as a reference.

Find it [HERE](https://scrimba.com/learn/classcomponents/) on Scrimba or [HERE](https://www.youtube.com/playlist?list=PLqYFXd9GTRVUE1mKTvVAPqtVzLbRTnm_L) on YouTube.

## Declaring a Class component vs declaring a Function component:

- Function component:

```jsx
import React from 'react';

const App = () => {
	return <div>App</div>;
};

export default App;
```

- Class component:
  You can either destructure `Component` from the React object like this:

```jsx
import React, { Component } from 'react';

export default class App extends Component {
	render() {
		return <div> Function component</div>;
	}
}
```

Or declare it like this without destructuring:

```jsx
import React from 'react';

export default class App extends React.Component {
	render() {
		return <h1> Class component</h1>;
	}
}
```

## Passing props in Class Components vs Function components

- Function Components
  It has to be accepted as a parameter to the function then used.

```jsx
// main.jsx / index.js
<App type="Function" />;

// App.jsx
import React from 'react';

const App = ({ type }) => {
	return <div>{type} Component</div>;
};

export default App;
```

- Class Components
  You don't have to accept the prop as an argument. The class automatically add it to any component created with that name. Just pass `this.props.<the_prop_name>` into the component.

```jsx
// main.jsx / index.js
<App type="Class" />;

// App.jsx
import React from 'react';

export default class App extends React.Component {
	render() {
		return <h1>{this.props.type} component</h1>;
	}
}
```

## Declaring state in Function components vs in Class components

- Function Component
  State in function components can be of any value; booleans, a string, an array, a number etc.

```jsx
import { useState } from 'react';

const State = () => {
	const [goOut, setGoOut] = useState('Yes');
	
	return (
	<div>
		{/* Rest of the component */}
	</div>
	);
};

export default State;
```

- Class component
  State in class components are always objects and every data we add will be a property on that object
  The object **MUST** also be called `state`.

```jsx
import React, { Component } from 'react';

export class State extends Component {
	// This is hoe to declare a state in class components
	state = {
		goOut: 'Yes',
	};

	toggleGoOut() {
	// The function for changing state goes in here
	}
	render() {
		return (
			// Rest of the component
		)
	}
}

export default State;
```
