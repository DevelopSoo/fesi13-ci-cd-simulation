#!/bin/bash 

echo "------------ 어플리케이션 배포 시작 ------------"
cd /home/ubuntu/nextjs-aws-test
npm ci
pm2 kill
pm2 start npm --name "nextjs-app" -- start

echo "------------ 어플리케이션 배포 완료 ------------"