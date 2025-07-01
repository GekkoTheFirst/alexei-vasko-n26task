FROM mcr.microsoft.com/playwright:v1.53.2-noble AS base
COPY . .
RUN npx playwright test

FROM scratch AS artifacts
COPY --from=base /reports/index.html /