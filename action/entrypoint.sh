#!/bin/bash
echo $INPUT_TARGET_ADDRESS
cd /usr/src/app
node command.js -a $INPUT_TARGET_ADDRESS -e html