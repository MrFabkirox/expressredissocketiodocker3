code need to go in index.js

docker-compose up

docker container exec -it contNameOrId sh

cd /home/ubuntu/redis/7001
../redis-server ./redis.conf

port 7001
cluster-enabled yes
cluster-config-file nodes.conf
cluster-node-timeout 5000
appendonly yes

redis-cli --cluster create 127.0.0.1:7001 127.0.0.1:7002 127.0.0.1:7003 127.0.0.1:7004 127.0.0.1:7005 127.0.0.1:7006 --cluster-replicas 1

redis-cli -c -p 7001

npm start
npm sock
npm room

localhost:8080/

// 1
two tabs

node index.js 8080
localhost:8080/

node index.js 8081
localhost:8081/
