.PHONY: default
default: help

## Public commands

.PHONY: update-packages
update-packages: ## Interactively updates packages
	@npx npm-check-updates -i

## Hidden commands

.PHONY: help
help:
	@echo "Make tasks:\n"
	@grep -hE '^[%a-zA-Z_-]+:.*?## .*$$' Makefile | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m  %-17s\033[0m %s\n", $$1, $$2}'
	@echo ""

.editorconfig: ./node_modules/@vellone/techsak/.editorconfig
	@cp ./node_modules/@vellone/techsak/.editorconfig .editorconfig
