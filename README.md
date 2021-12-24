# Radio Widget

This is simple Radio widget (you can find PSD and PNG files attached).

## Application Requirements/Rules & Hints:

1. Widget is mostly static -selecting station is the only action available. After selecting station, it should toggle it and display its name at the bottom of the widget.
2. Rest of the buttons should be clickable but it should trigger no action.

## Additional requirements & Hints:

1. React.
2. TypeScript or Proptypes (TypeScript would be much more appreciable).
3. Tests (should be covered by tests).
4. Test coverage analysis (not required).
5. CSS Modules (https://github.com/css-modules/css-modules).
6. Even though the radio station list is predefined - the application should be ready to accept the stations from the backend service without any refactoring.
7. Tests should not fail after switching to receive radio stations from the backend service.
8. Redux Saga or Redux could be used (not required).
9. Transition/motion smoothness would be appreciated (not required).
10. Pay attention to code quality, formatting, conventions etc.

## Quick start

1. You'll need to have Node >= 14.18.1 and npm >= 6.14.15 on your machine
2. Clone this repo using git clone https://github.com/sonjoydatta/radio-widget
3. Enter to the project directory: cd `radio-widget`
4. Run `yarn install` in order to install dependencies.
5. At this point you can run yarn start to see the app at http://localhost:3000

## Technical breif

1. As I don't know how you going to be using this widget so, I used `create-react-app` command to create this project. If this is a pluggable widget then we need to set up this project with a custom webpack/vite and build a file with `IIFE` format.
2. Back, plus and minus icons have no activity.
3. To load with API data, call your API in the `App` component and pass the response to the child component, you don't need to change anything else.
4. To chack test cases you can run `yarn test` command
