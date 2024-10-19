// package: kpoppop.messages.v1
// file: messages.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

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

export class ConversationsResponse extends jspb.Message {
  clearConversationsList(): void;
  getConversationsList(): Array<Conversation>;
  setConversationsList(value: Array<Conversation>): void;
  addConversations(value?: Conversation, index?: number): Conversation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConversationsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ConversationsResponse): ConversationsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConversationsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConversationsResponse;
  static deserializeBinaryFromReader(message: ConversationsResponse, reader: jspb.BinaryReader): ConversationsResponse;
}

export namespace ConversationsResponse {
  export type AsObject = {
    conversationsList: Array<Conversation.AsObject>,
  }
}

export class ContentMarkAsRead extends jspb.Message {
  getConvid(): string;
  setConvid(value: string): void;

  getTo(): number;
  setTo(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContentMarkAsRead.AsObject;
  static toObject(includeInstance: boolean, msg: ContentMarkAsRead): ContentMarkAsRead.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ContentMarkAsRead, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContentMarkAsRead;
  static deserializeBinaryFromReader(message: ContentMarkAsRead, reader: jspb.BinaryReader): ContentMarkAsRead;
}

export namespace ContentMarkAsRead {
  export type AsObject = {
    convid: string,
    to: number,
  }
}

export class ContentMarkAsReadResponse extends jspb.Message {
  getConvid(): string;
  setConvid(value: string): void;

  getTo(): number;
  setTo(value: number): void;

  getUnread(): number;
  setUnread(value: number): void;

  getRead(): boolean;
  setRead(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContentMarkAsReadResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ContentMarkAsReadResponse): ContentMarkAsReadResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ContentMarkAsReadResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContentMarkAsReadResponse;
  static deserializeBinaryFromReader(message: ContentMarkAsReadResponse, reader: jspb.BinaryReader): ContentMarkAsReadResponse;
}

export namespace ContentMarkAsReadResponse {
  export type AsObject = {
    convid: string,
    to: number,
    unread: number,
    read: boolean,
  }
}

export class EventMessage extends jspb.Message {
  getEvent(): string;
  setEvent(value: string): void;

  getContent(): string;
  setContent(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventMessage.AsObject;
  static toObject(includeInstance: boolean, msg: EventMessage): EventMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EventMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventMessage;
  static deserializeBinaryFromReader(message: EventMessage, reader: jspb.BinaryReader): EventMessage;
}

export namespace EventMessage {
  export type AsObject = {
    event: string,
    content: string,
  }
}

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

