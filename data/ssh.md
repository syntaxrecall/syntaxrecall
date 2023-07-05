---
id: 2e11137f-4b9b-40a8-b116-ad9e50fe74b4
title: SSH
description: A cheatsheet for SSH
---

Table of contents
[[toc]]

SSH (Secure Shell) is a protocol for secure network services. It lets you connect to a remote server and run commands or transfer files.

# Basic Commands

- Connect to a server (default port 22):

```bash
ssh user@server
```

- Connect to a server with a specific port:

```bash
ssh user@server -p port
```

- Connect to a server with a private key file:

```bash
ssh -i /path/to/file.pem user@server
```

- Run a command on a remote server:

```bash
ssh user@server 'command'
```

- Copy a file from local to remote using SCP (Secure Copy):

```bash
scp /local/path/file user@server:/remote/path/
```

- Copy a file from remote to local using SCP:

```bash
scp user@server:/remote/path/file /local/path/
```

- Copy a directory recursively from local to remote using SCP:

```bash
scp -r /local/path/dir user@server:/remote/path/
```

- Copy a directory recursively from remote to local using SCP:

```bash
scp -r user@server:/remote/path/dir /local/path/
```

# Advanced Commands

- Enable X11 forwarding to run graphical apps over SSH:

```bash
ssh -X user@server
```

- Launch a specific X app over SSH:

```bash
ssh -X -t user@server 'app'
```

- Forward the authentication agent to use the local keys on the remote server:

```bash
ssh -A user@server
```

- Create a local port forwarding tunnel from localhost:8080 to remote.example.com:5000 through personal.server.com:

```bash
ssh -f -L 8080:remote.example.com:5000 user@personal.server.com -N
```

- Create a remote port forwarding tunnel from personal.server.com:8080 to localhost:5000:

```bash
ssh -f -R 8080:localhost:5000 user@personal.server.com -N
```

- Create a dynamic SOCKS proxy on localhost:1080 and route all traffic through personal.server.com:

```bash
ssh -f -D 1080 user@personal.server.com -N
```

# Key Management

- Generate an RSA key pair with 4096 bits and an email as a comment:

```bash
ssh-keygen -t rsa -b 4096 -C "your@email.com"
```

- Copy the public key to the remote server for passwordless login:

```bash
ssh-copy-id user@server
```

- Change the passphrase of the private key:

```bash
ssh-keygen -p -f /path/to/file.pem
```

- Change the comment of the public key:

```bash
ssh-keygen -c -f /path/to/file.pub
```

- Generate a public key from a private key:

```bash
ssh-keygen -y -f /path/to/file.pem > /path/to/file.pub
```

- Search for an IP or hostname in the known_hosts file:

```bash
ssh-keygen -F ip_or_hostname
```

- Remove an IP or hostname from the known_hosts file:

```bash
ssh-keygen -R ip_or_hostname
```

# Configuration Files

- System-wide config file: `/etc/ssh/ssh_config`
- User-specific config file: `~/.ssh/config`
- Private key files: `~/.ssh/id_type`
- Public key files: `~/.ssh/id_type.pub`
- Logged in hosts: `~/.ssh/known_hosts`
- Authorized login keys: `~/.ssh/authorized_keys`

# Configuration Example

You can create aliases for frequently used servers in the `~/.ssh/config` file. For example, to create an alias for personal.server.com with port 2222, user root, and private key file.pem, you can write:

```
Host personal
    HostName personal.server.com
    Port 2222
    User root
    IdentityFile ~/.ssh/file.pem
```

Then you can connect to the server using the alias:

```bash
ssh personal
```
