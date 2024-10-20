// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.4
//   protoc               v5.28.2
// source: messages.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { Timestamp } from "./google/protobuf/timestamp";

export const protobufPackage = "kpoppop.messages.v1";

export interface EventMessage {
  /** Type of event (e.g., "CONNECT", "CONVERSATIONS") */
  event: string;
  /** Content of the event (e.g., JSON or Protobuf serialized data) */
  content: string;
}

export interface Message {
  convid: string;
  to: number;
  from: number;
  content: string;
  createdAt: Date | undefined;
  fromSelf: boolean;
  read: boolean;
}

export interface Conversation {
  id: number;
  convid: string;
  username: string;
  displayname: string;
  photo?: string | undefined;
  status: string;
  messages: Message[];
  unread: number;
}

export interface ContentConversationsResponse {
  conversations: Conversation[];
}

export interface ContentMarkAsRead {
  /** Conversation ID */
  convid: string;
  /** Recipient ID */
  to: number;
}

export interface ContentMarkAsReadResponse {
  /** Conversation ID */
  convid: string;
  /** Recipient ID */
  to: number;
  /** Number of unread messages remaining */
  unread: number;
  /** Whether the messages are marked as read */
  read: boolean;
}

function createBaseEventMessage(): EventMessage {
  return { event: "", content: "" };
}

export const EventMessage: MessageFns<EventMessage> = {
  encode(message: EventMessage, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.event !== "") {
      writer.uint32(10).string(message.event);
    }
    if (message.content !== "") {
      writer.uint32(18).string(message.content);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): EventMessage {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.event = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.content = reader.string();
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EventMessage {
    return {
      event: isSet(object.event) ? globalThis.String(object.event) : "",
      content: isSet(object.content) ? globalThis.String(object.content) : "",
    };
  },

  toJSON(message: EventMessage): unknown {
    const obj: any = {};
    if (message.event !== "") {
      obj.event = message.event;
    }
    if (message.content !== "") {
      obj.content = message.content;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<EventMessage>, I>>(base?: I): EventMessage {
    return EventMessage.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<EventMessage>, I>>(object: I): EventMessage {
    const message = createBaseEventMessage();
    message.event = object.event ?? "";
    message.content = object.content ?? "";
    return message;
  },
};

function createBaseMessage(): Message {
  return { convid: "", to: 0, from: 0, content: "", createdAt: undefined, fromSelf: false, read: false };
}

export const Message: MessageFns<Message> = {
  encode(message: Message, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.convid !== "") {
      writer.uint32(10).string(message.convid);
    }
    if (message.to !== 0) {
      writer.uint32(16).int32(message.to);
    }
    if (message.from !== 0) {
      writer.uint32(24).int32(message.from);
    }
    if (message.content !== "") {
      writer.uint32(34).string(message.content);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(42).fork()).join();
    }
    if (message.fromSelf !== false) {
      writer.uint32(48).bool(message.fromSelf);
    }
    if (message.read !== false) {
      writer.uint32(56).bool(message.read);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Message {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.convid = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.to = reader.int32();
          continue;
        }
        case 3: {
          if (tag !== 24) {
            break;
          }

          message.from = reader.int32();
          continue;
        }
        case 4: {
          if (tag !== 34) {
            break;
          }

          message.content = reader.string();
          continue;
        }
        case 5: {
          if (tag !== 42) {
            break;
          }

          message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        }
        case 6: {
          if (tag !== 48) {
            break;
          }

          message.fromSelf = reader.bool();
          continue;
        }
        case 7: {
          if (tag !== 56) {
            break;
          }

          message.read = reader.bool();
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Message {
    return {
      convid: isSet(object.convid) ? globalThis.String(object.convid) : "",
      to: isSet(object.to) ? globalThis.Number(object.to) : 0,
      from: isSet(object.from) ? globalThis.Number(object.from) : 0,
      content: isSet(object.content) ? globalThis.String(object.content) : "",
      createdAt: isSet(object.createdAt) ? fromJsonTimestamp(object.createdAt) : undefined,
      fromSelf: isSet(object.fromSelf) ? globalThis.Boolean(object.fromSelf) : false,
      read: isSet(object.read) ? globalThis.Boolean(object.read) : false,
    };
  },

  toJSON(message: Message): unknown {
    const obj: any = {};
    if (message.convid !== "") {
      obj.convid = message.convid;
    }
    if (message.to !== 0) {
      obj.to = Math.round(message.to);
    }
    if (message.from !== 0) {
      obj.from = Math.round(message.from);
    }
    if (message.content !== "") {
      obj.content = message.content;
    }
    if (message.createdAt !== undefined) {
      obj.createdAt = message.createdAt.toISOString();
    }
    if (message.fromSelf !== false) {
      obj.fromSelf = message.fromSelf;
    }
    if (message.read !== false) {
      obj.read = message.read;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Message>, I>>(base?: I): Message {
    return Message.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Message>, I>>(object: I): Message {
    const message = createBaseMessage();
    message.convid = object.convid ?? "";
    message.to = object.to ?? 0;
    message.from = object.from ?? 0;
    message.content = object.content ?? "";
    message.createdAt = object.createdAt ?? undefined;
    message.fromSelf = object.fromSelf ?? false;
    message.read = object.read ?? false;
    return message;
  },
};

function createBaseConversation(): Conversation {
  return { id: 0, convid: "", username: "", displayname: "", photo: undefined, status: "", messages: [], unread: 0 };
}

export const Conversation: MessageFns<Conversation> = {
  encode(message: Conversation, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    if (message.convid !== "") {
      writer.uint32(18).string(message.convid);
    }
    if (message.username !== "") {
      writer.uint32(26).string(message.username);
    }
    if (message.displayname !== "") {
      writer.uint32(34).string(message.displayname);
    }
    if (message.photo !== undefined) {
      writer.uint32(42).string(message.photo);
    }
    if (message.status !== "") {
      writer.uint32(50).string(message.status);
    }
    for (const v of message.messages) {
      Message.encode(v!, writer.uint32(58).fork()).join();
    }
    if (message.unread !== 0) {
      writer.uint32(64).int32(message.unread);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Conversation {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConversation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.id = reader.int32();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.convid = reader.string();
          continue;
        }
        case 3: {
          if (tag !== 26) {
            break;
          }

          message.username = reader.string();
          continue;
        }
        case 4: {
          if (tag !== 34) {
            break;
          }

          message.displayname = reader.string();
          continue;
        }
        case 5: {
          if (tag !== 42) {
            break;
          }

          message.photo = reader.string();
          continue;
        }
        case 6: {
          if (tag !== 50) {
            break;
          }

          message.status = reader.string();
          continue;
        }
        case 7: {
          if (tag !== 58) {
            break;
          }

          message.messages.push(Message.decode(reader, reader.uint32()));
          continue;
        }
        case 8: {
          if (tag !== 64) {
            break;
          }

          message.unread = reader.int32();
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Conversation {
    return {
      id: isSet(object.id) ? globalThis.Number(object.id) : 0,
      convid: isSet(object.convid) ? globalThis.String(object.convid) : "",
      username: isSet(object.username) ? globalThis.String(object.username) : "",
      displayname: isSet(object.displayname) ? globalThis.String(object.displayname) : "",
      photo: isSet(object.photo) ? globalThis.String(object.photo) : undefined,
      status: isSet(object.status) ? globalThis.String(object.status) : "",
      messages: globalThis.Array.isArray(object?.messages) ? object.messages.map((e: any) => Message.fromJSON(e)) : [],
      unread: isSet(object.unread) ? globalThis.Number(object.unread) : 0,
    };
  },

  toJSON(message: Conversation): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.convid !== "") {
      obj.convid = message.convid;
    }
    if (message.username !== "") {
      obj.username = message.username;
    }
    if (message.displayname !== "") {
      obj.displayname = message.displayname;
    }
    if (message.photo !== undefined) {
      obj.photo = message.photo;
    }
    if (message.status !== "") {
      obj.status = message.status;
    }
    if (message.messages?.length) {
      obj.messages = message.messages.map((e) => Message.toJSON(e));
    }
    if (message.unread !== 0) {
      obj.unread = Math.round(message.unread);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Conversation>, I>>(base?: I): Conversation {
    return Conversation.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Conversation>, I>>(object: I): Conversation {
    const message = createBaseConversation();
    message.id = object.id ?? 0;
    message.convid = object.convid ?? "";
    message.username = object.username ?? "";
    message.displayname = object.displayname ?? "";
    message.photo = object.photo ?? undefined;
    message.status = object.status ?? "";
    message.messages = object.messages?.map((e) => Message.fromPartial(e)) || [];
    message.unread = object.unread ?? 0;
    return message;
  },
};

function createBaseContentConversationsResponse(): ContentConversationsResponse {
  return { conversations: [] };
}

export const ContentConversationsResponse: MessageFns<ContentConversationsResponse> = {
  encode(message: ContentConversationsResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    for (const v of message.conversations) {
      Conversation.encode(v!, writer.uint32(10).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ContentConversationsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContentConversationsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.conversations.push(Conversation.decode(reader, reader.uint32()));
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ContentConversationsResponse {
    return {
      conversations: globalThis.Array.isArray(object?.conversations)
        ? object.conversations.map((e: any) => Conversation.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ContentConversationsResponse): unknown {
    const obj: any = {};
    if (message.conversations?.length) {
      obj.conversations = message.conversations.map((e) => Conversation.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ContentConversationsResponse>, I>>(base?: I): ContentConversationsResponse {
    return ContentConversationsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ContentConversationsResponse>, I>>(object: I): ContentConversationsResponse {
    const message = createBaseContentConversationsResponse();
    message.conversations = object.conversations?.map((e) => Conversation.fromPartial(e)) || [];
    return message;
  },
};

function createBaseContentMarkAsRead(): ContentMarkAsRead {
  return { convid: "", to: 0 };
}

export const ContentMarkAsRead: MessageFns<ContentMarkAsRead> = {
  encode(message: ContentMarkAsRead, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.convid !== "") {
      writer.uint32(10).string(message.convid);
    }
    if (message.to !== 0) {
      writer.uint32(16).int32(message.to);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ContentMarkAsRead {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContentMarkAsRead();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.convid = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.to = reader.int32();
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ContentMarkAsRead {
    return {
      convid: isSet(object.convid) ? globalThis.String(object.convid) : "",
      to: isSet(object.to) ? globalThis.Number(object.to) : 0,
    };
  },

  toJSON(message: ContentMarkAsRead): unknown {
    const obj: any = {};
    if (message.convid !== "") {
      obj.convid = message.convid;
    }
    if (message.to !== 0) {
      obj.to = Math.round(message.to);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ContentMarkAsRead>, I>>(base?: I): ContentMarkAsRead {
    return ContentMarkAsRead.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ContentMarkAsRead>, I>>(object: I): ContentMarkAsRead {
    const message = createBaseContentMarkAsRead();
    message.convid = object.convid ?? "";
    message.to = object.to ?? 0;
    return message;
  },
};

function createBaseContentMarkAsReadResponse(): ContentMarkAsReadResponse {
  return { convid: "", to: 0, unread: 0, read: false };
}

export const ContentMarkAsReadResponse: MessageFns<ContentMarkAsReadResponse> = {
  encode(message: ContentMarkAsReadResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.convid !== "") {
      writer.uint32(10).string(message.convid);
    }
    if (message.to !== 0) {
      writer.uint32(16).int32(message.to);
    }
    if (message.unread !== 0) {
      writer.uint32(24).int32(message.unread);
    }
    if (message.read !== false) {
      writer.uint32(32).bool(message.read);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ContentMarkAsReadResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContentMarkAsReadResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.convid = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.to = reader.int32();
          continue;
        }
        case 3: {
          if (tag !== 24) {
            break;
          }

          message.unread = reader.int32();
          continue;
        }
        case 4: {
          if (tag !== 32) {
            break;
          }

          message.read = reader.bool();
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ContentMarkAsReadResponse {
    return {
      convid: isSet(object.convid) ? globalThis.String(object.convid) : "",
      to: isSet(object.to) ? globalThis.Number(object.to) : 0,
      unread: isSet(object.unread) ? globalThis.Number(object.unread) : 0,
      read: isSet(object.read) ? globalThis.Boolean(object.read) : false,
    };
  },

  toJSON(message: ContentMarkAsReadResponse): unknown {
    const obj: any = {};
    if (message.convid !== "") {
      obj.convid = message.convid;
    }
    if (message.to !== 0) {
      obj.to = Math.round(message.to);
    }
    if (message.unread !== 0) {
      obj.unread = Math.round(message.unread);
    }
    if (message.read !== false) {
      obj.read = message.read;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ContentMarkAsReadResponse>, I>>(base?: I): ContentMarkAsReadResponse {
    return ContentMarkAsReadResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ContentMarkAsReadResponse>, I>>(object: I): ContentMarkAsReadResponse {
    const message = createBaseContentMarkAsReadResponse();
    message.convid = object.convid ?? "";
    message.to = object.to ?? 0;
    message.unread = object.unread ?? 0;
    message.read = object.read ?? false;
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function toTimestamp(date: Date): Timestamp {
  const seconds = Math.trunc(date.getTime() / 1_000);
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = (t.seconds || 0) * 1_000;
  millis += (t.nanos || 0) / 1_000_000;
  return new globalThis.Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof globalThis.Date) {
    return o;
  } else if (typeof o === "string") {
    return new globalThis.Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

export interface MessageFns<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
  fromJSON(object: any): T;
  toJSON(message: T): unknown;
  create<I extends Exact<DeepPartial<T>, I>>(base?: I): T;
  fromPartial<I extends Exact<DeepPartial<T>, I>>(object: I): T;
}
