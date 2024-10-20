#!/usr/bin/env sh

# abort on errors
set -e

# build
rm -rf ./dist
npm run build

# navigate into the build output directory
cd dist

echo 'jabberwocky.zone' > CNAME

git init
git checkout -b main
git add -A
git commit -m "deploy - $(date)"

git push -f git@github.com:maratoid/jabberwocky.git main:gh-pages

cd -
