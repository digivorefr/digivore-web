ARG BUILD_PLATFORM
ARG DOCKER_IMAGE
FROM --platform=${BUILD_PLATFORM} ${DOCKER_IMAGE}

ENV NODE_ENV=development

COPY ./docker-entrypoint.sh /usr/local/bin/
COPY ./dsync /usr/local/bin/
COPY ./register_ssh /usr/local/bin/
RUN apk add --no-cache openssh-client git yarn inotify-tools rsync g++
# Fix for graphql generator dependency named parcel needing python in Arms (https://github.com/parcel-bundler/parcel/issues/6880)
RUN apk add --update python3 make g++ && rm -rf /var/cache/apk/*
RUN mkdir -p /root/.ssh

# See https://github.com/Yelp/dumb-init.
ARG ARCHITECTURE
RUN dumb_init_url=https://github.com/Yelp/dumb-init/releases/download/v1.2.2/dumb-init_1.2.2_$ARCHITECTURE && \
  wget -O /usr/local/bin/dumb-init $dumb_init_url \
  && chmod +x /usr/local/bin/dumb-init \
  && chmod +x /usr/local/bin/register_ssh \
  && chmod +x /usr/local/bin/docker-entrypoint.sh
ENTRYPOINT ["/usr/local/bin/dumb-init", "docker-entrypoint.sh"]

WORKDIR /var/www/html