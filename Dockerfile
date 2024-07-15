FROM node:lts-alpine3.20
WORKDIR /app 

# Copier le fichier package.json dans le dossier de l'application
COPY package.json. .

# Installer les dépendances de l'application
RUN npm install

# Copier tout le reste du code de l'application
COPY . .

# Construire l'application pour la production
RUN npm run build

# Exposer le port 3000
EXPOSE 3000

# lancement de l'application
CMD ["npm", "run", "start"]