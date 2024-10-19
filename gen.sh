#!/bin/bash

TS_PROTOC_PLUGIN="./node_modules/.bin/protoc-gen-ts"
TS_OUT_DIR="./gen/ts"

echo "Generate Go Files"
protoc -I ./proto \
  --go_out ./gen/go \
  --go_opt paths=source_relative \
  --go-grpc_out ./gen/go \
  --go-grpc_opt paths=source_relative \
  messages.proto

echo "Generate Typescript Files"
protoc -I ./proto \
  --plugin="protoc-gen-ts=$TS_PROTOC_PLUGIN" \
  --ts_out="$TS_OUT_DIR" \
  messages.proto
