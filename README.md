# Drive Project

## Demo


## Introduction
In this project I have created simple cloud data storage with Linux Debian based systems. So you can upload your files, viewing images, sharing data with other Linux users and sending messages to other users. Also you are logging as Linux user with SSH, not a database user. I used password for authentication. But I don't recommend this. Use private RSA key instead password authentication or use fail2ban for preventing login failure attack

## Installation
We will test this project on WSL Ubuntu 20.04 LTS. Make sure your Docker Desktop integrated with your distro. (Docker Desktop > Settings > Resource > WSL Integration )

 Go to your Desktop and clone.
- `git clone https://github.com/onurryazici/drive-project.git`

- Go to project root directory and run : `docker-compose up --build`

- Go to `localhost:3000` and you will see login page
![enter image description here](https://github.com/onurryazici/drive-project/blob/main/screenshots/src1.png)

- On your WSL make sure SSH and PasswordAuthentication option is active
- Open your WSL console with Ubuntu 20.04 LTS windows app and run these commands </br>
  `## Clean install for SSH`</br>
  `sudo apt remove openssh-server`</br>
  `sudo apt install openssh-server`</br>


  `## For running Java executable scripts, trash and sharing data` </br>
  `sudo apt update`</br>
  `sudo apt install openjdk-11-jdk-headless trash-cli acl`</br>
  
- Edit sshd_config file with nano 
`sudo nano /etc/ssh/sshd_config`
`Port 22` 
`PasswordAuthentication yes`
- Restart SSH for changes
 `sudo service ssh restart`
![enter image description here](https://github.com/onurryazici/drive-project/blob/main/screenshots/src2.png)
If you can connect users via SSH you are good.

## Create User

Open your WSL Distro copy and run some necessary scripts</br>
`sudo cp /mnt/c/Users/YOUR_USERNAME/Desktop/drive-project/scripts/* /bin`</br>
`sudo chmod +x /bin/CreateUser.sh`</br>

Create user with CreateUser.sh</br>
`sudo CreateUser.sh NEW_USERNAME`

Now you have successfully created a drive user. This script was used to create the folders that users will use and to create the structure.
So every users have directory structure like this: </br>
->/home/user/drive </br>
->/home/user/drive-downloads </br>
->/home/user/drive-shared </br>
->/home/user/drive-sharedWithMe </br>
->/home/user/.local </br>

## Delete User
Make sure you run below command and then delete /home/YOUR_USERNAME folder too.
`sudo deluser YOUR_USERNAME`

## Login
Now you can login to drive from `localhost:3000`  with that you have created user.
#### WARNING: If there is a problem, check if the ssh service is starting with the command below</br>
`## Check SSH status` </br>
`sudo service ssh status`</br>

`## Start SSH` </br>
`sudo service ssh start`</br>
