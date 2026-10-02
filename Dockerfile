# --- Estágio 1: Builder ---
FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# --- Estágio 2: Servidor Nginx para Produção ---
FROM nginx:alpine

# Copia a configuração do Nginx com suporte a SPA (try_files para rotas como /livros)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copia os arquivos de build gerados pelo Vite para a pasta pública do Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]