#!/bin/bash

set -e

# start be
npm run --prefix json-server serve &
PIDBE=$!

# start fe
npm run --prefix react-admin serve &
PIDFE=$!

wait $PIDBE
wait $PIDFE
