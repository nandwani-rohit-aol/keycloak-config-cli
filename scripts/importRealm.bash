#! /usr/bin/bash

java -jar ./keycloak-config-cli-24.0.1.jar --keycloak.url=http://localhost:8080 --keycloak.ssl-verify=true --keycloak.user=admin --keycloak.password=admin123 --import.files.locations=./keycloak-sample/1.json
