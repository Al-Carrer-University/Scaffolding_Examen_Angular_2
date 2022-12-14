#!/bin/bash

## Configuraci贸n
image="scaffolding-angular-examen-2"          ## 馃憟 Escribe el nombre de tu imagen de docker
server="scaffolding-angular-examen-2"     ## 馃憟 Escribe el nombre del servidor heroku

## Descargamos la configuraci贸n de nginx para Angular.
echo "Creamos la carpega nginx y nos descargamos la configuraci贸n."
mkdir nginx
cd nginx
curl https://raw.githubusercontent.com/nexus122/nginx_heroku-angular_configuration/main/default.conf -o default.conf
cd ..

## Descargamos el Dockerfile de angular
curl https://raw.githubusercontent.com/nexus122/nginx_heroku-angular_configuration/main/Dockerfile -o Dockerfile

## Ejecuci贸n de la dokerizaci贸n
echo "Se va a generar la imagen docker: "$image
docker build -t $image .

## Si Heroku no existe lo instalamos
heroku -v || npm install -g heroku

## Iniciamos el proceso de subida a heroku
echo "Iniciamos sesion en heroku"
$(heroku apps)
## heroku login
echo "Iniciamos sesion en container:login"
heroku container:login

## Comprobamos si el servidor ya existe
if [[ $(heroku apps) != *"$server"* ]]; then
    heroku create $server
fi

## Tratamos la imagen para subirla al repositorio
echo "Le ponemos un tag a la imagen, para que heroku nos entienda"
docker tag $image registry.heroku.com/$server/web

echo "Hago un push al repositorio de contenedores de docker de heroku con un nombre entendible para el"
docker push registry.heroku.com/$server/web

echo "Pasamos a release nuestra imagen en el servidor web"
heroku container:release web --app=$server
