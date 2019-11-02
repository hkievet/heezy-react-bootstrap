# Emotion CSS Framework

11-2-2019, cafe saturday

Goal: Add Emotion compile capabilities to the project and make a cool animation loader icon.

The goal is to use emotion within a *react* project.  So instead of installing `emotion` we use `@emotion/core` as per the [Emotion Documentation][]

A caveat to using typescript is that you need to add a comment to the top of every file:

> To make the css prop work with pure TypeScript (without babel plugin) you need to add `/** @jsx jsx */` at the top of every file that is using the css prop:

A nice snippet to use for this:

```
	"Import Emotion": {
		"body": [
			"/** @jsx jsx */",
			"import { css, jsx } from \"@emotion/core\";"
		],
		"description": "imports emotion into a typescript non-babel project",
		"prefix": "importemotion"
	}
```

To add a snippet in VS Code: 

(cmd+shift+p) > Preferences: Configure User Snippets > typescriptreact.json


[Emotion Documentation]: https://emotion.sh/docs/introduction
