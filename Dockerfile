FROM testcafe/testcafe
# See https://github.com/DevExpress/testcafe/tree/master/docker

# We need root privileages to install new deps:
USER root


WORKDIR  /var/jenkins_home