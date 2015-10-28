FROM node


WORKDIR /opt
COPY .bowerrc /root/.bowerrc
COPY bower.json /opt/bower.json

RUN ['bower', 'install']
