# --- Build stage ---
  FROM node:20-alpine AS build
  WORKDIR /app
  
  ARG VITE_PUBLIC_URL
  ARG VITE_API_URL
  
  # Set environment variables for build
  ENV VITE_PUBLIC_URL=$VITE_PUBLIC_URL
  ENV VITE_API_URL=$VITE_API_URL
  
  COPY package*.json ./
  RUN npm ci --include=dev
  COPY . .
  RUN npm run build
  
  # --- Runtime stage ---
  FROM nginx:1.27-alpine
  # Ensure curl for healthcheck
  RUN apk add --no-cache curl
  
  # Remove the stock site to avoid conflicts
  RUN rm -f /etc/nginx/conf.d/default.conf
  
  # Copy your SPA server block in its place
  COPY nginx/default.conf /etc/nginx/conf.d/default.conf
  
  COPY --from=build /app/dist /usr/share/nginx/html
  EXPOSE 80
  HEALTHCHECK --interval=30s --timeout=3s --retries=3 \
    CMD curl -fsS http://127.0.0.1/ >/dev/null || exit 1