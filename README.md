 ...Prueba de Pedro Valdez...

Esa es la prueba de Pedro Valdez. las dos tareas estan en el mismo proyecto. 

## Contenido

Back-End controlador de usuraio y notocias.
El proyecto esta realizado en:

- [Node.js](https://nodejs.org/es/)
- [express.js](https://expressjs.com/es/)
- [MongoDB](https://www.mongodb.com/es)

## Como Clonar

Comando para clonar:

```bash
cd existing_folder
git clone ${url}

```

## Intalación

Ya clonado el proyecto es necesario instalar todas las dependencias con el comando:

```bash
npm install
```

### Run en LocalHost:
```bash
npm test
```
y en otra terminal 
```bash
tsc --watch
```

para corres la prueba definitiva 

```bash
npm start
```
de esta manera los cambios de TypeScript no seran actualizados. 

## prueba 1 
```bash
localhost:8000/prueba1/auth
```

## prueba 2

post de usuario
```bash
POST localhost:8000/prueba2/
```
body

```bash

    "name": "pedro",
    "city": "Mazatlán",
    "birtday": "1997-07-01"

```

get de usuario
```bash
GET localhost:8000/prueba2/
```









### Autor

Desarrollo realizado por [BATUZAV](https://batuzav.com)
