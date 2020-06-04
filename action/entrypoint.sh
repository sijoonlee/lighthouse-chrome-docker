#!/bin/bash
cd /github/workspace
ls -l
pwd
cd action
ls -l
bash -c "node command.js -a $TARGET_ADDRESS"
