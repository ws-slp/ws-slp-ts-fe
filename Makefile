init:
	make create-env-dev
	npm clean-install
	npm run prepare

create-env-dev:
	@echo "### ENV VARS" > ./.env.local
	@echo "# URL configuration" >> ./.env.local
	@echo "NEXT_PUBLIC_SUPABASE_URL=" >> ./.env.local
	@echo "NEXT_PUBLIC_SUPABASE_KEY=" >> ./.env.local
