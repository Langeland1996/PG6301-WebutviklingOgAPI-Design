Lecture03 - React kodekvalitet (Jest/Github action/Coveralls.io/Prettier)
____________
| Prettier |

About: Tool that reformat the code to look better

package.json --> "scripts"

	// Write all js & jsx files after prettier format standard:
	"format": "prettier --write *.{jsx, js} __test__/**/*.{jsx,js}"

	// Check if all js & jsx files are formated after prettier standard
	"format:check": "prettier --check *.{jsx, js} __test__/**/*.{jsx,js}"

	Tips: Using npm run format:check in scripts used for tests will give
		updates as you tests your programs 
		Eksample: "verify": "npm run format:check && jest --collectCoverage"

