#!/bin/bash
cd /usr/app
ls -la
pwd
cd action
ls -la
bash -c "node command.js -a $TARGET_ADDRESS"
