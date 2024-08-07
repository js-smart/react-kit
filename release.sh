#!/bin/bash

# Get the first argument
next_version=$1

# Path to the package.json file
PACKAGE_JSON_FILE="react-kit/package.json"
PACKAGE_JSON_FILE2="package.json"

# Update the version in package.json
jq --arg v "$next_version" '.version = $v' "$PACKAGE_JSON_FILE" > "tmp.json" && mv "tmp.json" "$PACKAGE_JSON_FILE"
jq --arg v "$next_version" '.version = $v' "$PACKAGE_JSON_FILE2" > "tmp2.json" && mv "tmp2.json" "$PACKAGE_JSON_FILE2"

# Build the commit message
commit_message="chore: bump version to $next_version"

# Set the git user
git config  user.name "Pavan Kumar Jadda"
git config  user.email 17564080+pavankjadda@users.noreply.github.com
git config user.signingkey "$2"
git config commit.gpgsign true

# Make the git commit with the message
git add .
git commit -m "$commit_message"

# Push the commit
git push
