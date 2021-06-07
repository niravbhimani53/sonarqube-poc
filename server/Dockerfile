FROM mcr.microsoft.com/dotnet/sdk:5.0.202

ENV PATH $PATH:/root/.dotnet/tools

RUN apt-get update \
	&& apt-get dist-upgrade -y \
	&& apt-get install -y \
	apt-transport-https \
	ca-certificates

RUN mkdir -p /usr/share/man/man1mkdir -p /usr/share/man/man1
RUN apt-get install -y openjdk-11-jre
RUN apt-get install -y unzip \
	&& wget https://github.com/SonarSource/sonar-scanner-msbuild/releases/download/5.2.1.31210/sonar-scanner-msbuild-5.2.1.31210-net5.0.zip \
	&& unzip sonar-scanner-msbuild-5.2.1.31210-net5.0.zip -d /sonar-scanner \
	&& rm sonar-scanner-msbuild-5.2.1.31210-net5.0.zip \
	&& chmod +x -R /sonar-scanner

WORKDIR /server
COPY . ./

RUN dotnet tool install --global dotnet-sonarscanner
