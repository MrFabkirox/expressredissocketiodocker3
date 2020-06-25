docker-compose up

docker container exec -it contNameOrId sh

cd 7000
../redis-server ./redis.conf

port 7000
cluster-enabled yes
cluster-config-file nodes.conf
cluster-node-timeout 5000
appendonly yes

redis-cli --cluster create 127.0.0.1:7000 127.0.0.1:7001 127.0.0.1:7002 127.0.0.1:7003 127.0.0.1:7004 127.0.0.1:7005 --cluster-replicas 1

redis-cli -c -p 7000

npm start

localhost:8080/

// 1
two tabs

node index.js 8080
localhost:8080/

node index.js 8081
localhost:8081/
