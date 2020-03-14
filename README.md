# To do list checker

Checks a list of to do items to determine if the project is ready for release.
Sounds weird? Read [some details](#releasing) of what I mean by that and how this changed
the way I develop.

## Usage

## Development

The following describes how to (help) develop this code.

## Setup and run

Project requires NodeJS to be installed. Since no one installs their nodejs globally anymore,
this project uses docker to provide the environment. Prefix every command with `./run.sh`
to build and run the command in the docker container. If you should have nodejs installed
globally just leave out `./run.sh`.

- `cd <here>`
- `./run.sh npm i` to install all dependencies
- `./run.sh npm test` to run all the tests
- develop ...

## Releasing

You want to know if you are ready to release a new version.
Run `npm run releasable --silent`, this starts a script that checks the [CHANGELOG.md](./CHANGELOG.md), which
is your to-do list! What, to-do list? Yes. See below how and why?

To release a new version run `npm run release` (not `npm version`!), this will include the
checks described and do the release and versioning (read more below).
To make it public on npm run `npm publish`, if you have permissions on this project the new
version might go live.

## Recommended Development Process

After all changes, before releasing, we always want to get some kind of list of what we did, a changelog.
Creating a changelog after building the next cool feature is quite tedious, even scripts that run
through commit messages (even when they have a certain format), is just not to the point, because
it starts from the code. Not from the user! Let's turn it around.

Just like in TDD, where I write first a test for what we are planning to code, I started to go one level
up and describe the user's feature first. I start writing things in the changelog, prefixed with the
github style checkboxes `[ ]` (for unchecked) and once I finished the thing I change it to `[x]`.

In the beginning this felt quite strange. But once I got used to it,
the plan for the next version (see [Versioning](#versioning) below) had
always been in the [CHANGELOG.md](./CHANGELOG.md) and I "just" had to work it off. Technical things, like
refactoring, etc. went into the commits, but never into the changelog, they naturally don't belong there
anyways. Meanwhile, the changelog lines even become my commit messages, once I really start or finish
building the feature. I tick the feature/task off in the changelog and one can even see in the commits
when a certain feature was done.

Here is the process in bullet points:
1) Write out all planned features, to-dos in the [CHANGELOG.md](./CHANGELOG.md)
1) Make each one line, and prefix this line with `[ ]`
1) The headline of this section, is the next (major) version number, e.g. `# v1.0.0`
1) (Every item, you plan for some future version put it either above the headline of the next version or in your issue tracker)
1) Work off one feature/to-do at a time
1) Tick off the line in the changelog and commit it
1) When all items are done release, using `npm run release`

Tip: If you write less features/to-dos per version, you can release more often, get faster feedback
and can stay focused. Don't overestimate your speed, add less features, and you will ship happier.

## Versioning

Semantic versioning looks nice on paper, but every change is essentially an external API change, if it is
for speed, compatibility or any other change that might be "invisible" (to tests). The browsers and many software vendors
have gone towards major-only versioning. Therefore I simplified the versioning process too, just use
major versions and provide a proper changelog, that a user can understand.
