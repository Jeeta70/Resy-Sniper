version: 2.1
orbs:
  node: circleci/node@4.0.0
jobs:
  build-and-deploy:
    executor:
      name: node/default
    steps:
      - checkout
      - node/with-cache:
          steps:
            - run: npm install
            - run: npm run build
            - run: sudo apt-get install rsync && rsync --version
            - run: rsync -a -e "ssh -o StrictHostKeyChecking=no" dist/ bitnami@54.172.183.153:~/home/bitnami/resy-sniper-frontend/
            - run:
                name: Deploy Final
                command: |
                  ssh bitnami@54.172.183.153 "sudo rsync -a /home/bitnami/resy-sniper-frontend/dist/ /var/www/html/"
workflows:
    build-and-deploy:
      jobs:
        - build-and-deploy:
            filters:
              branches:
                only: master # only deploy on the master branch