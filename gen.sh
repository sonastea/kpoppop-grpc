#!/bin/bash

GO_MODULE_NAME="github.com/sonastea/kpoppop-grpc/ipc/go"
GO_OUT_DIR="./ipc/go"

TS_PROTOC_PLUGIN="./node_modules/.bin/protoc-gen-ts_proto"
TS_OUT_DIR="./ipc/ts"

mkdir -p $GO_OUT_DIR

echo "Generating go stub files..."
protoc -I ./proto \
  --go_out="$GO_OUT_DIR" \
  --go_opt paths=source_relative \
  --go-grpc_out="$GO_OUT_DIR" \
  --go-grpc_opt paths=source_relative \
  messages.proto

echo "Generating typescript stub files..."
protoc -I ./proto \
  --plugin="$TS_PROTOC_PLUGIN" \
  --ts_proto_out="$TS_OUT_DIR" \
  messages.proto

if [ ! -f "$GO_OUT_DIR/go.mod" ]; then
  echo "Initializing go.mod in $GO_OUT_DIR"
  (cd $GO_OUT_DIR && go mod init $GO_MODULE_NAME)
fi

(cd $GO_OUT_DIR  && go mod tidy)

echo "Generation complete."
