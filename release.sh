#!/bin/bash
set -e

# ------------------------------------------------------------------------------
# Run this script before each release to update offline files.
# ------------------------------------------------------------------------------
BASEDIR=$(dirname $0)

# update deno
mkdir -p $BASEDIR/files/usr/local/bin
wget -T 30 -O $BASEDIR/files/usr/local/bin/deno.zip \
    https://github.com/denoland/deno/releases/latest/download/deno-x86_64-unknown-linux-gnu.zip
unzip -o $BASEDIR/files/usr/local/bin/deno.zip -d /tmp

echo
LOCAL_DENO=/tmp/deno
$LOCAL_DENO --version

# update deno cache
rm -rf $BASEDIR/files/home/scaler/.cache/deno
mkdir -p $BASEDIR/files/home/scaler/.cache

export DENO_DIR=$BASEDIR/files/home/scaler/.cache/deno
$LOCAL_DENO cache $BASEDIR/files/home/scaler/app/scaler.ts

# test deno application
$LOCAL_DENO fmt --check $BASEDIR/files/home/scaler/app/
$LOCAL_DENO lint $BASEDIR/files/home/scaler/app/
$LOCAL_DENO check $BASEDIR/files/home/scaler/app/scaler.ts

# nginx-jwt-auth
mkdir $BASEDIR/files/usr/local/share
wget -O $BASEDIR/files/usr/local/share/nginx-jwt-auth.lua \
    https://raw.githubusercontent.com/nordeck/nginx-jwt-auth/main/nginx-jwt-auth.lua
