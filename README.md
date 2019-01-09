# Goodlawyer Electron

### Installation instructions
1. `npm install`

### Running instructions
1. `npm run dev-server`
2. `npm run electron` (in separate terminal)

### Linting / Code Quality
Linting will be done using ESLint. The configuration file for that is `.eslintrc`. Right now only requiring semicolons is enforced, but others are set as warnings. Expect rules set as warnings to become enforced near project milestones / end of sprint. I'm sure more things will become either disabled or reduced to warnings in the future as we write more code.

#### Running the linter
If you're using Atom, install the `linter-eslint` plugin (and the required dependencies when prompted) to get inline warnings and fixes as you code. Process is probably very similar for VSCode. To run it manually (ideally before a git push), run `npm run lint` or `npx eslint src` from the root directory.

### Notes
1. Use `git pull upstream master` to update local repository
2. Run `npm install` after every pull to make sure you have all the right dependencies
3. Make your changes in a branch in your repo (`git checkout -b some-branch-name`)
4. Push changes to forked repo, then submit PR via github.com

### CI
Continuous integration and delivery lives here https://circleci.com/gh/parkerSmith725/GoodlawyerElectron
Currently only pull requests and master branch commits are built. We will probably add code linting validation amongst other things as required.
The build artifact (currently `goodlawyer_portable.exe`) after building can be found in that job in Cicle Ci's artifacts tab. Download the exe to test if required.
No MacOS automated builds are configured for now.

### Manual building
To build a Windows exe, run `npm run dist:win`. MacOS builds will come soon-ish.