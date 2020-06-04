#!/bin/sh

set -e

echo "Serializing environment:"

if [ -f /var/env.template ]; then
    envsubst < /var/env.template > /var/www/.env
fi

react-env --dest .

cat env.js

exec "$@"
