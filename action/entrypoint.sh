#!/bin/bash
echo $INPUT_TARGET_ADDRESS
cd /usr/src/app
node command.js --addr $INPUT_TARGET_ADDRESS \
                --exportTo html \
                --willCheckPass no \
                --minPerformance 0.9 \
                --minAccessibility 0.9 \
                --minBestPractices 0.9 \
                --minSEO 0.9 \
                --minPWA 0.9

cp ./report.html /github/workspace/report.html

read passOrFail < passOrFail.txt
echo $passOrFail
if [ $passOrFail == "pass" ]; then 
    exit 0
else
    exit 1
fi