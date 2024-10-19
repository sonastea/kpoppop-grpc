// package: kpoppop.messages.v1
// file: messages.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class ConnectRequest extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConnectRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ConnectRequest): ConnectRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConnectRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConnectRequest;
  static deserializeBinaryFromReader(message: ConnectRequest, reader: jspb.BinaryReader): ConnectRequest;
}

export namespace ConnectRequest {
  export type AsObject = {
    userId: number,
  }
}

export class Message extends jspb.Message {
  getConvid(): string;
  setConvid(value: string): void;

  getTo(): number;
  setTo(value: number): void;

  getFrom(): number;
  setFrom(value: number): void;

  getContent(): string;
  setContent(value: string): void;

  hasCreatedAt(): boolean;
  clearCreatedAt(): void;
  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getFromSelf(): boolean;
  setFromSelf(value: boolean): void;

  getRead(): boolean;
  setRead(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Message.AsObject;
  static toObject(includeInstance: boolean, msg: Message): Message.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Message, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Message;
  static deserializeBinaryFromReader(message: Message, reader: jspb.BinaryReader): Message;
}

export namespace Message {
  export type AsObject = {
    convid: string,
    to: number,
    from: number,
    content: string,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    fromSelf: boolean,
    read: boolean,
  }
}

export class SendMessageRequest extends jspb.Message {
  hasMessage(): boolean;
  clearMessage(): void;
  getMessage(): Message | undefined;
  setMessage(value?: Message): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendMessageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SendMessageRequest): SendMessageRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SendMessageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendMessageRequest;
  static deserializeBinaryFromReader(message: SendMessageRequest, reader: jspb.BinaryReader): SendMessageRequest;
}

export namespace SendMessageRequest {
  export type AsObject = {
    message?: Message.AsObject,
  }
}

export class SendMessageResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  hasMessage(): boolean;
  clearMessage(): void;
  getMessage(): Message | undefined;
  setMessage(value?: Message): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendMessageResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SendMessageResponse): SendMessageResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SendMessageResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendMessageResponse;
  static deserializeBinaryFromReader(message: SendMessageResponse, reader: jspb.BinaryReader): SendMessageResponse;
}

export namespace SendMessageResponse {
  export type AsObject = {
    success: boolean,
    message?: Message.AsObject,
  }
}

export class GetConversationsRequest extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetConversationsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetConversationsRequest): GetConversationsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetConversationsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetConversationsRequest;
  static deserializeBinaryFromReader(message: GetConversationsRequest, reader: jspb.BinaryReader): GetConversationsRequest;
}

export namespace GetConversationsRequest {
  export type AsObject = {
    userId: number,
  }
}

export class GetConversationsResponse extends jspb.Message {
  clearConversationsList(): void;
  getConversationsList(): Array<Conversation>;
  setConversationsList(value: Array<Conversation>): void;
  addConversations(value?: Conversation, index?: number): Conversation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetConversationsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetConversationsResponse): GetConversationsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetConversationsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetConversationsResponse;
  static deserializeBinaryFromReader(message: GetConversationsResponse, reader: jspb.BinaryReader): GetConversationsResponse;
}

export namespace GetConversationsResponse {
  export type AsObject = {
    conversationsList: Array<Conversation.AsObject>,
  }
}

export class Conversation extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getConvid(): string;
  setConvid(value: string): void;

  getUsername(): string;
  setUsername(value: string): void;

  getDisplayname(): string;
  setDisplayname(value: string): void;

  hasPhoto(): boolean;
  clearPhoto(): void;
  getPhoto(): string;
  setPhoto(value: string): void;

  getStatus(): string;
  setStatus(value: string): void;

  clearMessagesList(): void;
  getMessagesList(): Array<Message>;
  setMessagesList(value: Array<Message>): void;
  addMessages(value?: Message, index?: number): Message;

  getUnread(): number;
  setUnread(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Conversation.AsObject;
  static toObject(includeInstance: boolean, msg: Conversation): Conversation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Conversation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Conversation;
  static deserializeBinaryFromReader(message: Conversation, reader: jspb.BinaryReader): Conversation;
}

export namespace Conversation {
  export type AsObject = {
    id: number,
    convid: string,
    username: string,
    displayname: string,
    photo: string,
    status: string,
    messagesList: Array<Message.AsObject>,
    unread: number,
  }
}

export class MarkAsReadRequest extends jspb.Message {
  getConvid(): string;
  setConvid(value: string): void;

  getTo(): number;
  setTo(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MarkAsReadRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MarkAsReadRequest): MarkAsReadRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MarkAsReadRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MarkAsReadRequest;
  static deserializeBinaryFromReader(message: MarkAsReadRequest, reader: jspb.BinaryReader): MarkAsReadRequest;
}

export namespace MarkAsReadRequest {
  export type AsObject = {
    convid: string,
    to: number,
  }
}

export class MarkAsReadResponse extends jspb.Message {
  getConvid(): string;
  setConvid(value: string): void;

  getTo(): number;
  setTo(value: number): void;

  getUnread(): number;
  setUnread(value: number): void;

  getRead(): boolean;
  setRead(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MarkAsReadResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MarkAsReadResponse): MarkAsReadResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MarkAsReadResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MarkAsReadResponse;
  static deserializeBinaryFromReader(message: MarkAsReadResponse, reader: jspb.BinaryReader): MarkAsReadResponse;
}

export namespace MarkAsReadResponse {
  export type AsObject = {
    convid: string,
    to: number,
    unread: number,
    read: boolean,
  }
}

