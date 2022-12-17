#!/bin/bash

set -e

# start be
npm run --prefix json-server serve &
PIDBE=$!

# start fe
npm start --prefix react-admin &
PIDFE=$!

wait $PIDBE
wait $PIDFE
