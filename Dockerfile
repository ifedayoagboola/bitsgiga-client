# Build stage
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
# If your static build command is different, change this:
RUN npm run build

# Run stage (nginx serves the static site)
FROM nginx:1.27-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Vite usually outputs dist; CRA outputs build. Pick one:
COPY --from=build /app/dist /usr/share/nginx/html
# If CRA, use:
# COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
