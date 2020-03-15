# Ideas
- [ ] add command to generate an example`CHANGELOG.md` file
- [ ] add command to the according npm scripts, so releasing is made easy
- [ ] typing: and/or maybe we want a `Result` returned from the parse function, which is either ok or not
      instead of the `{version: -1}` as we have it now

# version 5.0
- [x] move development to use docker (nix is just not used anywhere by anyone)
- [ ] fix bug in tests2text, it throws `split called on undefined`
  - [ ] the bug was not using `# version X` but `# vX` as headline, which is not really a bug
        show a warning and a hint when not finding the appropriate string
    - [x] prevent a parsing error to throw    
  - [x] to give the structure of the parsed text a meaning make it typed a bit better
- [ ] document usage in README
- [ ] initialize CHANGELOG.md on first run
- [ ] rename the project to something more useful and shorter, easier to spell and remember, not even I can remember the name
- [x] BUG: the nested items (see above) are not properly understood yet
- [x] BUG: when `# version X` shows up like here, it makes the logic fail
- [x] version can also be a string (like "1.0-beta"), not just a number (see type `TodoItems.version`)

# version 4.0
- [x] move to node v11
- [x] prevent need for esm by projects that require this one

# version 3.0
- [x] Allow passing the (CHANGELOG.md) file name to be parsed.

# version 2.0
- [x] describe what this project is for
- [x] provide an executable

# version 1.0
- [x] make it releaseable
- [x] move the actual code here