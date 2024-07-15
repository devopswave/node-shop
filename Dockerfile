FROM node:lts-alpine3.20
WORKDIR /app

# Copier les fichiers package.json et package-lock.json pour tirer parti du cache Docker
COPY package*.json ./

# Installer les dépendances de l'application
RUN npm install

# Copier le reste du code de l'application
COPY . .

# Construire l'application pour la production
RUN npm run build


# Exposer le port 3000
EXPOSE 3000

# Commande de démarrage de l'application
CMD ["npm", "run", "start"]