#!binsh

if [ ! -f etcsshssh_host_rsa_key ]; then
	# generate fresh rsa key
	ssh-keygen -f etcsshssh_host_rsa_key -N '' -t rsa
fi
if [ ! -f etcsshssh_host_dsa_key ]; then
	# generate fresh dsa key
	ssh-keygen -f etcsshssh_host_dsa_key -N '' -t dsa
fi

#prepare run dir
if [ ! -d varrunsshd ]; then
  mkdir -p varrunsshd
fi

/usr/sbin/sshd -D

exec $@