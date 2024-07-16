# Documentation du Projet Node-Shop

Bienvenue dans la documentation du projet Node-Shop. Ce guide vous fournira toutes les étapes nécessaires pour installer et configurer votre projet EverShop, ainsi que des informations supplémentaires pour les développeurs.

## Prérequis du Système

Avant de commencer, veuillez vérifier la liste des exigences système pour vous assurer que votre environnement est compatible avec EverShop.

## Installation Manuelle d'EverShop avec Npm

#### Étape 1 : Installation du Package Npm @evershop/evershop

1. Initialisez un nouveau projet npm :
   ```bash
   npm init
   ```
2. Installez le package @evershop/evershop :
   ```bash
   npm install @evershop/evershop
   ```

#### Étape 2 : Ajouter les Scripts Npm de Base

1. Ouvrez le fichier `package.json` et ajoutez les scripts suivants :
   ```json
   "scripts": {
       "setup": "evershop install",
       "build": "evershop build",
       "start": "evershop start",
       "start:debug": "evershop start --debug",
       "dev": "evershop dev",
       "user:create": "evershop user:create",
       "user:changePassword": "evershop user:changePassword"
   }
   ```

#### Étape 3 : Exécuter le Script d'Installation

1. Avant de lancer le script, assurez-vous d'avoir une base de données Postgres vide prête pour EverShop.
2. Exécutez le script d'installation :
   ```bash
   npm run setup
   ```

#### Étape 4 : Permissions des Dossiers

1. Assurez-vous que les dossiers suivants ont les permissions d'écriture :
   - `public/`
   - `.evershop`
   - `.log`
   - `media`

#### Étape 5 : Construire le Site

1. Construisez le site avec la commande suivante :
   ```bash
   npm run build
   ```

#### Étape 6 : Démarrer le Site

1. Démarrez votre boutique en mode production :
   ```bash
   npm run start
   ```
   Votre site sera accessible à l'adresse [http://localhost:3000](http://localhost:3000). Le panneau d'administration peut être accédé à [http://localhost:3000/admin](http://localhost:3000/admin).

### Mise à Jour d'EverShop

1. Pour mettre à jour EverShop à la dernière version, exécutez la commande suivante :
   ```bash
   npm install @evershop/evershop@latest
   ```
2. Après la mise à jour, il est nécessaire de reconstruire le site :
   ```bash
   npm run build
   ```
## Dockerisation de l'Application Node.js

### Dockerfile Multi-Stage

Pour optimiser le processus de dockerisation, nous utilisons un Dockerfile multi-stage. Cela permet de séparer les étapes de construction et de production, réduisant ainsi la taille de l'image finale et améliorant l'efficacité.

#### Dockerfile

```Dockerfile
# Étape de construction
FROM node:lts-alpine3.20 AS build
WORKDIR /app

# Copier les fichiers package.json et package-lock.json pour tirer parti du cache Docker
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

# Commande de démarrage de l'application
CMD ["npm", "run", "start"]
```

### Workflow GitHub Actions

Le workflow GitHub Actions est configuré pour automatiser le processus de build et de push de l'image Docker vers DockerHub à chaque push sur la branche `main`. Voici le fichier de configuration pour ce workflow.

#### YAML Workflow

```yaml
name: Docker

on:
  push:
    branches: [ main ]
  workflow_dispatch:

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
    - name: Checkout code
      uses: actions/checkout@v4

    - name: Set up Docker Buildx
      uses: docker/setup-buildx-action@v3

    - name: Login to DockerHub
      uses: docker/login-action@v3
      with:
        username: ${{ secrets.DOCKER_HUB_USERNAME }}
        password: ${{ secrets.DOCKER_HUB_PASSWORD }}

    - name: Build and push
      uses: docker/build-push-action@v6
      with:
        context: .
        push: true
        tags: ${{ secrets.DOCKER_HUB_USERNAME }}/node-shop:latest
```

### Explication

1. **Dockerfile Multi-Stage** :
   - **Étape de construction** : Nous utilisons l'image `node:lts-alpine3.20` pour créer un environnement léger. Les fichiers `package.json` et `package-lock.json` sont copiés en premier pour tirer parti du cache Docker et minimiser les reconstructions inutiles des dépendances. Ensuite, nous copions le reste du code de l'application et exécutons `npm run build` pour créer les fichiers de production.
   - **Étape de production** : Cette étape utilise également `node:lts-alpine3.20` et copie les fichiers nécessaires depuis l'étape de construction. Le port 3000 est exposé et l'application est démarrée avec la commande `npm run start`.

2. **Workflow GitHub Actions** :
   - **Événements déclencheurs** : Le workflow s'exécute sur chaque push vers la branche `main` ou manuellement via `workflow_dispatch`.
   - **Étapes** :
     - **Checkout code** : Utilise `actions/checkout@v4` pour récupérer le code source.
     - **Set up Docker Buildx** : Utilise `docker/setup-buildx-action@v3` pour configurer Docker Buildx.
     - **Login to DockerHub** : Utilise `docker/login-action@v3` pour s'authentifier auprès de DockerHub en utilisant les secrets `DOCKER_HUB_USERNAME` et `DOCKER_HUB_PASSWORD`.
     - **Build and push** : Utilise `docker/build-push-action@v6` pour builder et pousser l'image Docker vers DockerHub avec le tag spécifié.

Ce processus assure que l'application est toujours à jour sur DockerHub après chaque modification de code, garantissant ainsi un déploiement continu et efficace.
