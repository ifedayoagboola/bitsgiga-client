# --- Build stage: compiles your React app into static files ---
FROM node:20-alpine AS build
WORKDIR /app

# Copy manifest first so "npm ci" can be cached
COPY package*.json ./
RUN npm ci

# Copy the rest and build
COPY . .
# If your build script is "build" (React/Vite/CRA), this runs it:
RUN npm run build

# --- Runtime stage: serve static files with nginx ---
FROM nginx:1.27-alpine
# Basic nginx config (single-page app fallback)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy built files from the previous stage
# Vite outputs "dist", CRA outputs "build". Pick the right one:
# If Vite:
COPY --from=build /app/dist /usr/share/nginx/html
# If CRA, comment the line above and uncomment this:
# COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
