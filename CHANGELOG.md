# Ideas
- [ ] add command to generate an example`CHANGELOG.md` file
- [ ] add command to the according npm scripts, so releasing is made easy

# version 5.0
- [x] move development to use docker (nix is just not used anywhere by anyone)
- [ ] fix bug in tests2text
  - [ ] the bug was not using `# version X` but `# vX` as headline, which is not really a bug
        show a warning and a hint when not finding the appropriate string
    - [x] prevent a parsing error to throw    
  - [ ] to give the structure of the parsed text a meaning make it typed a bit better
        maybe even use TS for typing and have a `Result` from the parsing process        
- [ ] document usage in README
- [ ] initialize CHANGELOG.md on first run

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