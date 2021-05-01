First install node modules with npm install or yarn install.

After install you can run the application with npm run start or yarn start.

Query all users:

curl 'http://localhost:4000/graphql' -H 'Accept-Encoding: gzip, deflate, br' -H 'Content-Type: application/json' -H 'Accept: application/json' -H 'Connection: keep-alive' -H 'DNT: 1' -H 'Origin: http://localhost:4000' --data-binary '{"query":"\nquery($name: String) {\n list(name: $name){\n \_id,\n name,\n email,\n friends {\n name\n }\n }\n},"}' --compressed

Query all users that name starts with "dot" and ends with "ings":

curl 'http://localhost:4000/graphql' -H 'Accept-Encoding: gzip, deflate, br' -H 'Content-Type: application/json' -H 'Accept: application/json' -H 'Connection: keep-alive' -H 'DNT: 1' -H 'Origin: http://localhost:4000' --data-binary '{"query":"\nquery($name: String) {\n list(name: $name){\n \_id,\n name,\n email,\n friends {\n name\n }\n }\n},","variables":{"name":"dot ings"}}' --compressed
