#Dockerfile
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS builder
WORKDIR /src
COPY ./dockerConsole/dockerConsole.csproj ./dockerConsole/
RUN dotnet restore ./dockerConsole/dockerConsole.csproj
COPY . .
RUN dotnet build ./dockerConsole/dockerConsole.csproj -c Debug -o /src/out

FROM mcr.microsoft.com/dotnet/aspnet:8.0
WORKDIR /app
COPY --from=builder /src/out .

EXPOSE 80
ENTRYPOINT ["dockerConsole"]
