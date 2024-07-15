# Étape de construction
FROM node:lts-alpine3.20 AS build
WORKDIR /app

# Copier les fichiers package.json et package-lock.json pour tirer parti du cache Docker
COPY package*.json ./

# Installer les dépendances de l'application
RUN npm ci --only=production

# Copier le reste du code de l'application
COPY . .

# Construire l'application pour la production
RUN npm run build

# Étape de production
FROM node:lts-alpine3.20 AS production
WORKDIR /app

# Copier les fichiers de build et les dépendances de l'étape de construction
COPY --from=build /app .

# Exposer le port 3000
EXPOSE 3000

# Commande de démarrage de l'application
CMD ["npm", "run", "start"]