init:
	make create-env-dev
	npm clean-install --legacy-peer-deps
	npm run prepare

create-env-dev:
	@echo "### ENV VARS" > ./.env.local
	@echo "# URL configuration" >> ./.env.local
	@echo "NEXT_PUBLIC_SUPABASE_URL=" >> ./.env.local
	@echo "NEXT_PUBLIC_SUPABASE_KEY=" >> ./.env.local
