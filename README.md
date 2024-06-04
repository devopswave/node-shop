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

