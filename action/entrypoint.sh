#!/bin/bash
cd /github/workspace
ls -l
pwd
bash -c "node command.js -a $TARGET_ADDRESS"
