FROM node:lts-alpine3.20
WORKDIR /app 

# Copier tout le reste du code de l'application
COPY . .

# Installer les dépendances de l'application
RUN npm install

# Construire l'application pour la production
RUN npm run build


# Exposer le port 80
EXPOSE 3000

CMD ["npm", "run", "start"]