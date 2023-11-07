start:
	npm run dev

unit-all:
	npm run test

format: 
	npm run format

lint-fix:
	npm run lint-fix

before-commit:
	make format
	make lint-fix
	make unit-all
