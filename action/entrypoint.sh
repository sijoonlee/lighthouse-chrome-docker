#!/bin/bash
echo $INPUT_TARGET_ADDRESS
cd /usr/app
node command.js -a $INPUT_TARGET_ADDRESS
