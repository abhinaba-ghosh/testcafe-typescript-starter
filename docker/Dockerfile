FROM testcafe/testcafe
# See https://github.com/DevExpress/testcafe/tree/master/docker

# We need root privileages to install new deps:
USER root


RUN apt-get update && \
    apt-get install -y openjdk-8-jdk && \
    apt-get install -y ant && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/ && \
    rm -rf /var/cache/oracle-jdk8-installer;

ENV JAVA_HOME /usr/lib/jvm/java-8-openjdk-amd64/
RUN export JAVA_HOME

# EXPOSE 1337 1338