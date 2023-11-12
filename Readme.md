# Sesame Time

Frontend application for Time-Tracker Sesame App.

## Requirements
- Node and npm

## Up the project

Always need to do these steps:
- cd time-tracker
- Build: `make build`
- Start: `make start`

## Launch tests

- All tests: `make test-all`
- One test: `make test-one ARGS=<test file>`

## Acceptance criteria covered during technical test
- [x] It should display the time that the employee has been clocked in.
- [x] If the employee is working, it will show in real-time how their workday is progressing
- [x] If the employee is clocked out, it will display the time they have worked.
- [x] It should show a clock-in/out button that changes based on the employee's status
- [x] If they are working, we will display an "Exit" button.
- [x] If they are clocked out, we will show the "Enter" button
- [x] If they are paused, we will show the "Restart" and "Exit" button
- [x] It should display an avatar indicating the employee's status
- [x] It should display two dropdown menus


## Dependencies
- React
- Vitest
- Tailwind
- Axios
