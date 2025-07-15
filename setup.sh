#!/bin/bash

# Variables - adjust these as needed
DB_NAME="yourdb"
DB_USER="youruser"
DB_PASS="yourpassword"
INIT_SQL="init.sql"

# Export password for non-interactive use
export PGPASSWORD=$DB_PASS

# Check if database exists
if psql -U "$DB_USER" -h localhost -lqt | cut -d \| -f 1 | grep -qw "$DB_NAME"; then
  echo "Database '$DB_NAME' already exists. Skipping creation."
else
  echo "Creating database '$DB_NAME'..."
  createdb -U "$DB_USER" -h localhost "$DB_NAME"
fi

# Enable pgcrypto and run init.sql
echo "Running SQL initialization..."
psql -U "$DB_USER" -h localhost -d "$DB_NAME" -c 'CREATE EXTENSION IF NOT EXISTS "pgcrypto";'
psql -U "$DB_USER" -h localhost -d "$DB_NAME" -f "$INIT_SQL"

echo "✅ Database setup complete."
