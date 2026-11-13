#!/bin/sh
# Uso: sh publicar.sh  → pone una versión nueva en todo antes de subir a GitHub
V=$(date +%Y%m%d%H%M)
sed -i -E "s/\?v=[0-9]{12}/?v=$V/g" *.html
sed -i -E "s/const APP_VERSION = \"[0-9]{12}\"/const APP_VERSION = \"$V\"/" js/app.js
printf '{"v":"%s"}\n' "$V" > version.json
echo "Versión $V lista"
