# 도커 이미지에서 node 환경 설정
FROM node:alpine

# 작업 디렉토리 설정
WORKDIR /usr/src/app

# 로컬 PC의 모든 파일(.)을 컨테이너의 위에서 설정한 작업 디렉토리(.)로 복사
COPY . .

# 도커 '이미지'를 생성하는 과정에서 미리 의존성을 설치 (이미지에 포함됨)
RUN npm install

# 도커 '이미지'를 생성하는 과정에서 소스 코드를 빌드 (이미지에 포함됨)
RUN npm run build

# Next.js 앱이 사용하는 포트 명시하기 
EXPOSE 3000

# 완성된 이미지가 EC2 에서 '컨테이너'로 실행될 때, 자동으로 서버를 켜는 명령어
CMD [ "npm", "start" ]