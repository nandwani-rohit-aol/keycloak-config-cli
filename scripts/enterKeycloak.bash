#! /usr/bin/bash
containerId=$(docker container ls | grep keycloak | awk '{print $1}')
docker exec -it $containerId bash
