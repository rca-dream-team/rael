#!/bin/bash
SANITY_TOKEN=skC55L1rT7HBPU3am47zdLPOVHoLOG1S0jNfeJAymWJn6LE5nXVask6DRRG4wjCBR5V0pqA757lZnUjOFszraYzVdTBVvwEfO2LXqiJuuvYS3oCR79HBvFc26XrWlTExPWdWRXMu5OxdMOoRLi5QX2m5bwR6aw5J9fu504C3RUR0fBYWGWXK
NEXT_PUBLIC_TOKEN=skC55L1rT7HBPU3am47zdLPOVHoLOG1S0jNfeJAymWJn6LE5nXVask6DRRG4wjCBR5V0pqA757lZnUjOFszraYzVdTBVvwEfO2LXqiJuuvYS3oCR79HBvFc26XrWlTExPWdWRXMu5OxdMOoRLi5QX2m5bwR6aw5J9fu504C3RUR0fBYWGWXK
NEXT_PUBLIC_MIS_API_URL=http://194.163.167.131:6543/api/v1
JWT_SECRET=mfwmknjvjfpijm727jnmkka_%^*!@dwedwsxx_
# Specify the content to be written to the .env.local file
ENV_CONTENT="SANITY_TOKEN=$SANITY_TOKEN\nNEXT_PUBLIC_TOKEN=$NEXT_PUBLIC_TOKEN\nNEXT_PUBLIC_MIS_API_URL=$NEXT_PUBLIC_MIS_API_URL\nJWT_SECRET=$JWT_SECRET"

# Check if .env.local file exists
if [ -f .env.local ]; then
    # If the file exists, override its contents
    echo -e "$ENV_CONTENT" > .env.local
    echo "Existing .env.local file updated."
else
    # If the file doesn't exist, create it and write the content
    echo -e "$ENV_CONTENT" > .env.local
    echo ".env.local file created."
fi
