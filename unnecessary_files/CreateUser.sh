## USAGE : 
## 
## sudo scriptname.sh USERNAME 
## 
## $1 username 
USERNAME="$1" ;
adduser $USERNAME ;

USER_PATH="/home/$1" ;

DRIVE="$USER_PATH/drive" ;
DRIVE_DOWNLOADS="$USER_PATH/drive-downloads" ;
DRIVE_SHARED_WITH_ME="$USER_PATH/drive-sharedWithMe" ;
DRIVE_SHARED="$USER_PATH/drive-shared" ;
DRIVE_RECYCLE_BIN_FILES="$USER_PATH/.local/share/Trash/files" ;
DRIVE_RECYCLE_BIN_INFO="$USER_PATH/.local/share/Trash/info" ;

mkdir -p "$DRIVE" ;
mkdir -p "$DRIVE_DOWNLOADS" ;
mkdir -p "$DRIVE_SHARED_WITH_ME" ;
mkdir -p "$DRIVE_SHARED" ;
mkdir -p "$DRIVE_RECYCLE_BIN_FILES" ;
mkdir -p "$DRIVE_RECYCLE_BIN_INFO" ;

setfacl -Rm o:--x "$DRIVE" "$DRIVE_DOWNLOADS" "$DRIVE_SHARED" "$DRIVE_RECYCLE_BIN_FILES" "$DRIVE_RECYCLE_BIN_INFO" ;
setfacl -Rm o:rwx "$DRIVE_SHARED_WITH_ME" ;

chown $USERNAME $DRIVE ;
chown $USERNAME $DRIVE_DOWNLOADS ;
chown $USERNAME $DRIVE_SHARED_WITH_ME ;
chown $USERNAME $DRIVE_SHARED ;
chown -R "$USERNAME" "$USER_PATH/.local" ;