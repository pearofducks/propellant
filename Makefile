.PHONY: all test release ci-test help lint dev checklib demo build

all:		## Run test and release below
all: test release

help:		## Show this help
	@fgrep -h "##" $(MAKEFILE_LIST) | fgrep -v fgrep | sed -e 's/\\$$//' | sed -e 's/##//'

ci-test: lint
	@npm run mocha

test:		## Run linter and all tests
test: lint
	@npm run test

fix:
	@true
	$(eval FIX_FLAG=:fix)

lint:		## Run linter
	@npm run lint$(FIX_FLAG)

release:	## Create a release of js and css in the lib folder
	@echo "\nCreating a release of propellant components\n"
	@npm run build:vue
	@npm run build:css
	@mv css/*.css* lib/.
	@rm -rf css

dev:		## Start the live-reloading development server
dev: checklib
	@npm run dev

checklib:
	@if [ -d "lib" ]; then echo "\n\nlib folder exists, cowardly refusing to run dev env\n\n"; false; fi

demo: build
build:		## Build the demo page
	@echo "\nCreating a production build of the demo\n"
	@npm run build:demo
