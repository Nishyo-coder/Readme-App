# Readme-App
Create a command-line application that dynamically generates a professional README.md file from a user's input using the [Inquirer package](https://www.npmjs.com/package/inquirer). 
The application will be invoked by using a command line interface.

# User Story
AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project

## Installation

```md
GIVEN a command-line application that accepts user input
WHEN the user is prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of their project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN THE USER enters a project title
THEN this is displayed as the title of the README
WHEN THE USER entera a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN THE USER chooses a license for their application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN THE USER enters their GitHub username
THEN this is added to the section of the README entitled Questions, with a link to their GitHub profile
WHEN THE USER enters an email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN THE USER click on the links in the Table of Contents
THEN they are taken to the corresponding section of the README

![Screen Shot 2021-04-30 at 10 21 09 PM](https://user-images.githubusercontent.com/79215638/116768136-7258a280-aa02-11eb-86bf-fd6719c7c639.png)

![Screen Shot 2021-04-30 at 10 20 20 PM](https://user-images.githubusercontent.com/79215638/116768141-7ab0dd80-aa02-11eb-9174-f0f0d7ce562c.png)

```

## Credits
https://www.geeksforgeeks.org/node-js-fs-writefilesync-method/
https://nodejs.org/api/fs.html#fs_synchronous_example
https://nodejs.org/api/path.html#path_path_join_paths
https://nodejs.dev/learn/update-all-the-nodejs-dependencies-to-their-latest-version
https://www.npmjs.com/package/license-badger
https://opensource.org/licenses/MIT
The Professional Readme Guide

## License
MIT License

Copyright (c) [2021] [Shanisha Mitchell]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```