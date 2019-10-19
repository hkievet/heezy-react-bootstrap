# Making a snippet!

Today I made a snippet for generating a simple react component in typescript. This will save me a lot of time and make it easier to componetize

https://code.visualstudio.com/docs/editor/userdefinedsnippets

```
{
	"Functional Coponent Boilerplate": {
		"body": [
			"import * as React from 'react';",
			"",
			"export interface I$0Props {}",
			"",
			"export const Foo: React.FC<I$0Props> = props => {",
			"return <></>;",
			"};",
			"",
			"export default $0;",
		],
		"description": "desc",
		"prefix": "fcboilerplate"
	}
}
```
