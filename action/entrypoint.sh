#!/bin/bash
cd /github/workspace
ls -la
pwd
cd action
ls -la
bash -c "node command.js -a $TARGET_ADDRESS"
