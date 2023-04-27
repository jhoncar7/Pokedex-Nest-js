<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Ejecutar en desarrollo

1. Clonar el repositorio

2. Ejecutar el comando
```
yarn ó yarn install
```
3. Tener Nest CLI instalado
```
npm i -g @nestjs/cli
```
4. Levantar la base de datos con Docker
```
docker-compose up -d
```

5. Reconstruir la base de datos con la semilla
```
http://localhost:3000/api/v2/seed
```

6. Clonar el archivo __.env.template__ y renombra la copia a ```.env``` 

7. Llenar las variables de entorno definidas en el ```.env```

8. LLevantar la app
```
yarn start:dev
```
9. Reconstruir la base de datos con la semilla

## Stack Usado
* Nest-Js
* MongoDB

# Production Build
1. Crear el archivo ```.env.prod```
2. Llenar las variables de entorno de prod
3. Crear la nueva imagen
```
docker-compose -f docker-compose.prod.yaml --env-file .env.prod up --build
```
