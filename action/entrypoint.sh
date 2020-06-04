#!/bin/bash
echo $INPUT_TARGET_ADDRESS
node command.js -a $INPUT_TARGET_ADDRESS -e html
ls -al