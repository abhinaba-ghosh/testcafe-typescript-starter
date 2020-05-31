FROM testcafe/testcafe
# See https://github.com/DevExpress/testcafe/tree/master/docker

# We need root privileages to install new deps:
USER root


RUN cd /opt/testcafe \
    && npm install -g testcafe-reporter-allure \
    && npm install -g allure-commandline

EXPOSE 1337 1338