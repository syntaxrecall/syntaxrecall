---
id: cd4bdd45-560a-43d0-888c-97ccaf40bca6
title: Docker
description: A cheatsheet for Docker
---

Table of contents
[[toc]]

# Commands 

## Container commands

| Command | Description |
| --- | --- |
| `docker run image` | Run a container from an image |
| `docker ps` | List all running containers |
| `docker ps -a` | List all containers, including stopped ones |
| `docker stop container` | Stop a running container |
| `docker rm container` | Remove a container |
| `docker exec container command` | Execute a command in a running container |
| `docker logs container` | View the logs of a container |
| `docker cp source destination` | Copy files or folders between a container and the local filesystem |
| `docker commit container image` | Create a new image from a container's changes |

## Image commands

| Command | Description |
| --- | --- |
| `docker images` | List all images |
| `docker rmi image` | Remove an image |
| `docker pull image` | Pull an image from a registry |
| `docker push image` | Push an image to a registry |
| `docker build -t image .` | Build an image from a Dockerfile |
| `docker inspect object` | View detailed information about an object (container, image, network, etc.) |
| `docker tag source target` | Create a new tag for an image |
| `docker save image -o file` | Save an image to a tar archive |
| `docker load -i file` | Load an image from a tar archive |

## Network commands

| Command | Description |
| --- | --- |
| `docker network ls` | List all networks |
| `docker network create name` | Create a network |
| `docker network rm name` | Remove a network |
| `docker network connect name container` | Connect a container to a network |
| `docker network disconnect name container` | Disconnect a container from a network |

## Registry commands

| Command | Description |
| --- | --- |
| `docker login` | Log in to a registry |
| `docker logout` | Log out from a registry |

## System commands

| Command | Description |
| --- | --- |
| `docker system prune` | Remove unused data (containers, images, networks, etc.) |
| `docker system df` | Show disk usage by docker objects |
| `docker system info` | Show system-wide information |
