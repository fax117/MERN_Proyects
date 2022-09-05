#!/bin/bash

# This script displays various information to the screen

# Display 'Hello'
echo 'Hello'

# Assing a value to a variable
WORD='script'

# This doesn't work
echo  "$WORDing is fun!"

# Create a new variable
ENDING='ed'

# Combine the two variables
echo "This is ${WORD}${ENDING}"

# Reasignment
ENDING='ing'

echo "${WORD}${ENDING} is fun!"

# Reassing value to ENDING.
ENDING='s'

echo "You're going to write many ${WORD}${ENDING} in this class!"

