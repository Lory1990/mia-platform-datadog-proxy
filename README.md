# DataDog Proxy Microservice

This microservice is made up by this guide:

[Datadog - Proxy Setup](https://docs.datadoghq.com/real_user_monitoring/guide/proxy-rum-data/?tab=npm#proxy-setup)

this microservice acts as a proxy to your Real User Monitoring (formerly RUM) so that the AD blocking Services cannot block your tracking

## How to start
1. Install dependencies using `npm install`
1. Start the project using `npm run start:local`


## How to build and deploy
You have a `.gitlab-ci.yml` who does the job for you.

If you want to do this manually the only thing you sould do isz to build the docker image using

`docker build -t datadog-proxy:latest .`

## How can I use it

1. Build project (dockerfile)
1. Expose the microservice (do not use authenmtication)
1. To proxy all requests forllow this guide [Datadog - Proxy Setup](https://docs.datadoghq.com/real_user_monitoring/guide/proxy-rum-data/?tab=npm#proxy-setup) 
