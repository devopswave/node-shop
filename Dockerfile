# Utiliser une image multi-stage pour séparer les étapes de construction et de production
# Étape de construction
FROM node:lts-alpine3.20 AS build
WORKDIR /app 

# Copier le fichier package.json et package-lock.json en premier pour profiter du cache Docker
COPY package*.json ./

# Copier le reste du code de l'application
COPY . .

# Installer les dépendances de l'application
RUN npm install --only=production

# Construire l'application pour la production
RUN npm run build

# Étape de production
FROM node:lts-alpine3.20 AS production
WORKDIR /app 

# Copier les fichiers de build et les dépendances de l'étape de construction
COPY --from=build /app .

# Exposer le port 3000
EXPOSE 3000

CMD ["npm", "run", "start"]
