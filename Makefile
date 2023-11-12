build:
	npm install

start:
	npm run dev

test-all:
	npm run test

test-one:
	npm run test $(ARGS)

format: 
	npm run format

lint-fix:
	npm run lint-fix

before-commit:
	make format
	make lint-fix
	make test-all
