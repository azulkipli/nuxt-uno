ARG NODE_VERSION=22

# Create build stage
FROM node:${NODE_VERSION}-alpine3.21 AS build
RUN apk update && apk add --no-cache git

# Enable pnpm
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

# Set the integrity keys for pnpm
ENV COREPACK_INTEGRITY_KEYS='{"npm":[{"expires":"2025-01-29T00:00:00.000Z","keyid":"SHA256:jl3bwswu80PjjokCgh0o2w5c2U4LhQAE57gj9cz1kzA","keytype":"ecdsa-sha2-nistp256","scheme":"ecdsa-sha2-nistp256","key":"MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAE1Olb3zMAFFxXKHiIkQO5cJ3Yhl5i6UPp+IhuteBJbuHcA5UogKo0EWtlWwW6KSaKoTNEYL7JlCQiVnkhBktUgg=="},{"expires":null,"keyid":"SHA256:DhQ8wR5APBvFHLF/+Tc+AYvPOdTpcIDqOhxsBHRwC7U","keytype":"ecdsa-sha2-nistp256","scheme":"ecdsa-sha2-nistp256","key":"MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEY6Ya7W++7aUPzvMTrezH6Ycx3c+HOKYCcNGybJZSCJq/fd7Qa8uuAKtdIkUQtQiEKERhAmE5lMMJhP8OkDOa2g=="}]}'

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and pnpm-lock.yaml files to the working directory
COPY ./package.json /app/
COPY ./pnpm-lock.yaml /app/

## Install dependencies
RUN pnpm install

# Copy the rest of the application files to the working directory
COPY . .

# Set environment variables
ENV NITRO_PRESET=node-server

# Build the application
RUN pnpm run build

# Create a new stage for the production image
FROM node:${NODE_VERSION}-alpine3.21

# Set the working directory inside the container
WORKDIR /app

# Copy the output from the build stage to the working directory
COPY --from=build /app/.output ./

# Define environment variables
ENV HOST=0.0.0.0 NODE_ENV=production
ENV NITRO_PRESET=node-server

# Expose the port the application will run on
EXPOSE 3000

# Start the application
CMD ["node","/app/server/index.mjs"]
