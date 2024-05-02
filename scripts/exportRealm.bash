#! /usr/bin/bash
containerId=$(docker container ls | grep keycloak | awk '{print $1}')
currentDate=$(date +%s)
docker exec -it $containerId /opt/keycloak/bin/kc.sh export --file /tmp/1
docker cp $containerId:/tmp/1 /tmp/$currentDate.json
