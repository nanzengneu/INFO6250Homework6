# INFO6250MiniProject
INFO 6250 Mini Submission for Nan Zeng

Please look for the files for Mini Project submission:

1. app.php
2. hw6signup.html
3. hw6controllers.js
4. hw6signin.html
5. index.html


# Procedures
# 1. How to deploy apache + php+redis+redis client
```
sudo apt-get update

sudo apt-get install apache2

sudo apt install php libapache2-mod-php

sudo apt-get install -y php-pear

sudo pear channel-discover pear.nrk.io

sudo pear install nrk/Predis

sudo apt-get install build-essential

sudo apt-get install tcl8.5

wget http://download.redis.io/releases/redis-stable.tar.gz

tar xzf redis-stable.tar.gz

cd redis-stable/

make

make test

sudo make install

cd utils

sudo ./install_server.sh

sudo service redis_6379 start

```
# 2. Pull files to your local folder
1. app.php
2. hw6signup.html
3. hw6controllers.js
4. hw6signin.html
5. index.html

# Set up localhost
```
sudo vi etc/hosts
add reids-master redis-slave after 127.0.0.1 localhost
```
# Run Code in your browser
http://your_ip/index.html

# Hit Counter Function
1. Refresh the Main Page, and watch the number of visitor changes in the below.
2. Use the search function to enter any minute, any hour, any day, any month and any year to retrieve data for that specific time. 

