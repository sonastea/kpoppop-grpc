// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.36.6
// 	protoc        v6.30.2
// source: messages.proto

package message

import (
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
	unsafe "unsafe"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type EventType int32

const (
	EventType_UNKNOWN_TYPE  EventType = 0
	EventType_CONNECT       EventType = 1
	EventType_CONVERSATIONS EventType = 2
	EventType_MARK_AS_READ  EventType = 3
)

// Enum value maps for EventType.
var (
	EventType_name = map[int32]string{
		0: "UNKNOWN_TYPE",
		1: "CONNECT",
		2: "CONVERSATIONS",
		3: "MARK_AS_READ",
	}
	EventType_value = map[string]int32{
		"UNKNOWN_TYPE":  0,
		"CONNECT":       1,
		"CONVERSATIONS": 2,
		"MARK_AS_READ":  3,
	}
)

func (x EventType) Enum() *EventType {
	p := new(EventType)
	*p = x
	return p
}

func (x EventType) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (EventType) Descriptor() protoreflect.EnumDescriptor {
	return file_messages_proto_enumTypes[0].Descriptor()
}

func (EventType) Type() protoreflect.EnumType {
	return &file_messages_proto_enumTypes[0]
}

func (x EventType) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use EventType.Descriptor instead.
func (EventType) EnumDescriptor() ([]byte, []int) {
	return file_messages_proto_rawDescGZIP(), []int{0}
}

type EventMessage struct {
	state protoimpl.MessageState `protogen:"open.v1"`
	Event EventType              `protobuf:"varint,1,opt,name=event,proto3,enum=kpoppop.messages.v1.EventType" json:"event,omitempty"`
	// Types that are valid to be assigned to Content:
	//
	//	*EventMessage_RespConnect
	//	*EventMessage_RespConvos
	//	*EventMessage_ReqRead
	//	*EventMessage_RespRead
	Content       isEventMessage_Content `protobuf_oneof:"content"`
	unknownFields protoimpl.UnknownFields
	sizeCache     protoimpl.SizeCache
}

func (x *EventMessage) Reset() {
	*x = EventMessage{}
	mi := &file_messages_proto_msgTypes[0]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *EventMessage) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*EventMessage) ProtoMessage() {}

func (x *EventMessage) ProtoReflect() protoreflect.Message {
	mi := &file_messages_proto_msgTypes[0]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use EventMessage.ProtoReflect.Descriptor instead.
func (*EventMessage) Descriptor() ([]byte, []int) {
	return file_messages_proto_rawDescGZIP(), []int{0}
}

func (x *EventMessage) GetEvent() EventType {
	if x != nil {
		return x.Event
	}
	return EventType_UNKNOWN_TYPE
}

func (x *EventMessage) GetContent() isEventMessage_Content {
	if x != nil {
		return x.Content
	}
	return nil
}

func (x *EventMessage) GetRespConnect() *ContentConnectResponse {
	if x != nil {
		if x, ok := x.Content.(*EventMessage_RespConnect); ok {
			return x.RespConnect
		}
	}
	return nil
}

func (x *EventMessage) GetRespConvos() *ContentConversationsResponse {
	if x != nil {
		if x, ok := x.Content.(*EventMessage_RespConvos); ok {
			return x.RespConvos
		}
	}
	return nil
}

func (x *EventMessage) GetReqRead() *ContentMarkAsRead {
	if x != nil {
		if x, ok := x.Content.(*EventMessage_ReqRead); ok {
			return x.ReqRead
		}
	}
	return nil
}

func (x *EventMessage) GetRespRead() *ContentMarkAsReadResponse {
	if x != nil {
		if x, ok := x.Content.(*EventMessage_RespRead); ok {
			return x.RespRead
		}
	}
	return nil
}

type isEventMessage_Content interface {
	isEventMessage_Content()
}

type EventMessage_RespConnect struct {
	RespConnect *ContentConnectResponse `protobuf:"bytes,2,opt,name=resp_connect,json=respConnect,proto3,oneof"`
}

type EventMessage_RespConvos struct {
	RespConvos *ContentConversationsResponse `protobuf:"bytes,3,opt,name=resp_convos,json=respConvos,proto3,oneof"`
}

type EventMessage_ReqRead struct {
	ReqRead *ContentMarkAsRead `protobuf:"bytes,4,opt,name=req_read,json=reqRead,proto3,oneof"`
}

type EventMessage_RespRead struct {
	RespRead *ContentMarkAsReadResponse `protobuf:"bytes,5,opt,name=resp_read,json=respRead,proto3,oneof"`
}

func (*EventMessage_RespConnect) isEventMessage_Content() {}

func (*EventMessage_RespConvos) isEventMessage_Content() {}

func (*EventMessage_ReqRead) isEventMessage_Content() {}

func (*EventMessage_RespRead) isEventMessage_Content() {}

type Message struct {
	state         protoimpl.MessageState `protogen:"open.v1"`
	Convid        string                 `protobuf:"bytes,1,opt,name=convid,proto3" json:"convid,omitempty"`
	To            int32                  `protobuf:"varint,2,opt,name=to,proto3" json:"to,omitempty"`
	From          int32                  `protobuf:"varint,3,opt,name=from,proto3" json:"from,omitempty"`
	Content       *string                `protobuf:"bytes,4,opt,name=content,proto3,oneof" json:"content,omitempty"`
	CreatedAt     string                 `protobuf:"bytes,5,opt,name=created_at,json=createdAt,proto3" json:"created_at,omitempty"`
	FromSelf      bool                   `protobuf:"varint,6,opt,name=from_self,json=fromSelf,proto3" json:"from_self,omitempty"`
	Read          bool                   `protobuf:"varint,7,opt,name=read,proto3" json:"read,omitempty"`
	FromUser      *string                `protobuf:"bytes,8,opt,name=fromUser,proto3,oneof" json:"fromUser,omitempty"`
	FromPhoto     *string                `protobuf:"bytes,9,opt,name=fromPhoto,proto3,oneof" json:"fromPhoto,omitempty"`
	unknownFields protoimpl.UnknownFields
	sizeCache     protoimpl.SizeCache
}

func (x *Message) Reset() {
	*x = Message{}
	mi := &file_messages_proto_msgTypes[1]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *Message) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Message) ProtoMessage() {}

func (x *Message) ProtoReflect() protoreflect.Message {
	mi := &file_messages_proto_msgTypes[1]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Message.ProtoReflect.Descriptor instead.
func (*Message) Descriptor() ([]byte, []int) {
	return file_messages_proto_rawDescGZIP(), []int{1}
}

func (x *Message) GetConvid() string {
	if x != nil {
		return x.Convid
	}
	return ""
}

func (x *Message) GetTo() int32 {
	if x != nil {
		return x.To
	}
	return 0
}

func (x *Message) GetFrom() int32 {
	if x != nil {
		return x.From
	}
	return 0
}

func (x *Message) GetContent() string {
	if x != nil && x.Content != nil {
		return *x.Content
	}
	return ""
}

func (x *Message) GetCreatedAt() string {
	if x != nil {
		return x.CreatedAt
	}
	return ""
}

func (x *Message) GetFromSelf() bool {
	if x != nil {
		return x.FromSelf
	}
	return false
}

func (x *Message) GetRead() bool {
	if x != nil {
		return x.Read
	}
	return false
}

func (x *Message) GetFromUser() string {
	if x != nil && x.FromUser != nil {
		return *x.FromUser
	}
	return ""
}

func (x *Message) GetFromPhoto() string {
	if x != nil && x.FromPhoto != nil {
		return *x.FromPhoto
	}
	return ""
}

type Conversation struct {
	state         protoimpl.MessageState `protogen:"open.v1"`
	Id            int32                  `protobuf:"varint,1,opt,name=id,proto3" json:"id,omitempty"`
	Convid        string                 `protobuf:"bytes,2,opt,name=convid,proto3" json:"convid,omitempty"`
	Username      string                 `protobuf:"bytes,3,opt,name=username,proto3" json:"username,omitempty"`
	Displayname   *string                `protobuf:"bytes,4,opt,name=displayname,proto3,oneof" json:"displayname,omitempty"`
	Photo         *string                `protobuf:"bytes,5,opt,name=photo,proto3,oneof" json:"photo,omitempty"`
	Status        string                 `protobuf:"bytes,6,opt,name=status,proto3" json:"status,omitempty"`
	Messages      []*Message             `protobuf:"bytes,7,rep,name=messages,proto3" json:"messages,omitempty"`
	Unread        int32                  `protobuf:"varint,8,opt,name=unread,proto3" json:"unread,omitempty"`
	unknownFields protoimpl.UnknownFields
	sizeCache     protoimpl.SizeCache
}

func (x *Conversation) Reset() {
	*x = Conversation{}
	mi := &file_messages_proto_msgTypes[2]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *Conversation) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Conversation) ProtoMessage() {}

func (x *Conversation) ProtoReflect() protoreflect.Message {
	mi := &file_messages_proto_msgTypes[2]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Conversation.ProtoReflect.Descriptor instead.
func (*Conversation) Descriptor() ([]byte, []int) {
	return file_messages_proto_rawDescGZIP(), []int{2}
}

func (x *Conversation) GetId() int32 {
	if x != nil {
		return x.Id
	}
	return 0
}

func (x *Conversation) GetConvid() string {
	if x != nil {
		return x.Convid
	}
	return ""
}

func (x *Conversation) GetUsername() string {
	if x != nil {
		return x.Username
	}
	return ""
}

func (x *Conversation) GetDisplayname() string {
	if x != nil && x.Displayname != nil {
		return *x.Displayname
	}
	return ""
}

func (x *Conversation) GetPhoto() string {
	if x != nil && x.Photo != nil {
		return *x.Photo
	}
	return ""
}

func (x *Conversation) GetStatus() string {
	if x != nil {
		return x.Status
	}
	return ""
}

func (x *Conversation) GetMessages() []*Message {
	if x != nil {
		return x.Messages
	}
	return nil
}

func (x *Conversation) GetUnread() int32 {
	if x != nil {
		return x.Unread
	}
	return 0
}

type ContentConnectResponse struct {
	state         protoimpl.MessageState `protogen:"open.v1"`
	Content       string                 `protobuf:"bytes,1,opt,name=content,proto3" json:"content,omitempty"`
	unknownFields protoimpl.UnknownFields
	sizeCache     protoimpl.SizeCache
}

func (x *ContentConnectResponse) Reset() {
	*x = ContentConnectResponse{}
	mi := &file_messages_proto_msgTypes[3]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *ContentConnectResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ContentConnectResponse) ProtoMessage() {}

func (x *ContentConnectResponse) ProtoReflect() protoreflect.Message {
	mi := &file_messages_proto_msgTypes[3]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ContentConnectResponse.ProtoReflect.Descriptor instead.
func (*ContentConnectResponse) Descriptor() ([]byte, []int) {
	return file_messages_proto_rawDescGZIP(), []int{3}
}

func (x *ContentConnectResponse) GetContent() string {
	if x != nil {
		return x.Content
	}
	return ""
}

type ContentConversationsResponse struct {
	state         protoimpl.MessageState `protogen:"open.v1"`
	Conversations []*Conversation        `protobuf:"bytes,1,rep,name=conversations,proto3" json:"conversations,omitempty"`
	unknownFields protoimpl.UnknownFields
	sizeCache     protoimpl.SizeCache
}

func (x *ContentConversationsResponse) Reset() {
	*x = ContentConversationsResponse{}
	mi := &file_messages_proto_msgTypes[4]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *ContentConversationsResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ContentConversationsResponse) ProtoMessage() {}

func (x *ContentConversationsResponse) ProtoReflect() protoreflect.Message {
	mi := &file_messages_proto_msgTypes[4]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ContentConversationsResponse.ProtoReflect.Descriptor instead.
func (*ContentConversationsResponse) Descriptor() ([]byte, []int) {
	return file_messages_proto_rawDescGZIP(), []int{4}
}

func (x *ContentConversationsResponse) GetConversations() []*Conversation {
	if x != nil {
		return x.Conversations
	}
	return nil
}

type ContentMarkAsRead struct {
	state         protoimpl.MessageState `protogen:"open.v1"`
	Convid        string                 `protobuf:"bytes,1,opt,name=convid,proto3" json:"convid,omitempty"` // Conversation ID
	To            int32                  `protobuf:"varint,2,opt,name=to,proto3" json:"to,omitempty"`        // Recipient ID
	From          int32                  `protobuf:"varint,3,opt,name=from,proto3" json:"from,omitempty"`    // Sender ID
	unknownFields protoimpl.UnknownFields
	sizeCache     protoimpl.SizeCache
}

func (x *ContentMarkAsRead) Reset() {
	*x = ContentMarkAsRead{}
	mi := &file_messages_proto_msgTypes[5]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *ContentMarkAsRead) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ContentMarkAsRead) ProtoMessage() {}

func (x *ContentMarkAsRead) ProtoReflect() protoreflect.Message {
	mi := &file_messages_proto_msgTypes[5]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ContentMarkAsRead.ProtoReflect.Descriptor instead.
func (*ContentMarkAsRead) Descriptor() ([]byte, []int) {
	return file_messages_proto_rawDescGZIP(), []int{5}
}

func (x *ContentMarkAsRead) GetConvid() string {
	if x != nil {
		return x.Convid
	}
	return ""
}

func (x *ContentMarkAsRead) GetTo() int32 {
	if x != nil {
		return x.To
	}
	return 0
}

func (x *ContentMarkAsRead) GetFrom() int32 {
	if x != nil {
		return x.From
	}
	return 0
}

type ContentMarkAsReadResponse struct {
	state         protoimpl.MessageState `protogen:"open.v1"`
	Convid        string                 `protobuf:"bytes,1,opt,name=convid,proto3" json:"convid,omitempty"`  // Conversation ID
	To            int32                  `protobuf:"varint,2,opt,name=to,proto3" json:"to,omitempty"`         // Recipient ID
	Unread        int32                  `protobuf:"varint,3,opt,name=unread,proto3" json:"unread,omitempty"` // Number of unread messages remaining
	Read          bool                   `protobuf:"varint,4,opt,name=read,proto3" json:"read,omitempty"`     // Whether the messages are marked as read
	From          int32                  `protobuf:"varint,5,opt,name=from,proto3" json:"from,omitempty"`     // Sender ID
	unknownFields protoimpl.UnknownFields
	sizeCache     protoimpl.SizeCache
}

func (x *ContentMarkAsReadResponse) Reset() {
	*x = ContentMarkAsReadResponse{}
	mi := &file_messages_proto_msgTypes[6]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *ContentMarkAsReadResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ContentMarkAsReadResponse) ProtoMessage() {}

func (x *ContentMarkAsReadResponse) ProtoReflect() protoreflect.Message {
	mi := &file_messages_proto_msgTypes[6]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ContentMarkAsReadResponse.ProtoReflect.Descriptor instead.
func (*ContentMarkAsReadResponse) Descriptor() ([]byte, []int) {
	return file_messages_proto_rawDescGZIP(), []int{6}
}

func (x *ContentMarkAsReadResponse) GetConvid() string {
	if x != nil {
		return x.Convid
	}
	return ""
}

func (x *ContentMarkAsReadResponse) GetTo() int32 {
	if x != nil {
		return x.To
	}
	return 0
}

func (x *ContentMarkAsReadResponse) GetUnread() int32 {
	if x != nil {
		return x.Unread
	}
	return 0
}

func (x *ContentMarkAsReadResponse) GetRead() bool {
	if x != nil {
		return x.Read
	}
	return false
}

func (x *ContentMarkAsReadResponse) GetFrom() int32 {
	if x != nil {
		return x.From
	}
	return 0
}

var File_messages_proto protoreflect.FileDescriptor

const file_messages_proto_rawDesc = "" +
	"\n" +
	"\x0emessages.proto\x12\x13kpoppop.messages.v1\"\x8b\x03\n" +
	"\fEventMessage\x124\n" +
	"\x05event\x18\x01 \x01(\x0e2\x1e.kpoppop.messages.v1.EventTypeR\x05event\x12P\n" +
	"\fresp_connect\x18\x02 \x01(\v2+.kpoppop.messages.v1.ContentConnectResponseH\x00R\vrespConnect\x12T\n" +
	"\vresp_convos\x18\x03 \x01(\v21.kpoppop.messages.v1.ContentConversationsResponseH\x00R\n" +
	"respConvos\x12C\n" +
	"\breq_read\x18\x04 \x01(\v2&.kpoppop.messages.v1.ContentMarkAsReadH\x00R\areqRead\x12M\n" +
	"\tresp_read\x18\x05 \x01(\v2..kpoppop.messages.v1.ContentMarkAsReadResponseH\x00R\brespReadB\t\n" +
	"\acontent\"\x9f\x02\n" +
	"\aMessage\x12\x16\n" +
	"\x06convid\x18\x01 \x01(\tR\x06convid\x12\x0e\n" +
	"\x02to\x18\x02 \x01(\x05R\x02to\x12\x12\n" +
	"\x04from\x18\x03 \x01(\x05R\x04from\x12\x1d\n" +
	"\acontent\x18\x04 \x01(\tH\x00R\acontent\x88\x01\x01\x12\x1d\n" +
	"\n" +
	"created_at\x18\x05 \x01(\tR\tcreatedAt\x12\x1b\n" +
	"\tfrom_self\x18\x06 \x01(\bR\bfromSelf\x12\x12\n" +
	"\x04read\x18\a \x01(\bR\x04read\x12\x1f\n" +
	"\bfromUser\x18\b \x01(\tH\x01R\bfromUser\x88\x01\x01\x12!\n" +
	"\tfromPhoto\x18\t \x01(\tH\x02R\tfromPhoto\x88\x01\x01B\n" +
	"\n" +
	"\b_contentB\v\n" +
	"\t_fromUserB\f\n" +
	"\n" +
	"_fromPhoto\"\x98\x02\n" +
	"\fConversation\x12\x0e\n" +
	"\x02id\x18\x01 \x01(\x05R\x02id\x12\x16\n" +
	"\x06convid\x18\x02 \x01(\tR\x06convid\x12\x1a\n" +
	"\busername\x18\x03 \x01(\tR\busername\x12%\n" +
	"\vdisplayname\x18\x04 \x01(\tH\x00R\vdisplayname\x88\x01\x01\x12\x19\n" +
	"\x05photo\x18\x05 \x01(\tH\x01R\x05photo\x88\x01\x01\x12\x16\n" +
	"\x06status\x18\x06 \x01(\tR\x06status\x128\n" +
	"\bmessages\x18\a \x03(\v2\x1c.kpoppop.messages.v1.MessageR\bmessages\x12\x16\n" +
	"\x06unread\x18\b \x01(\x05R\x06unreadB\x0e\n" +
	"\f_displaynameB\b\n" +
	"\x06_photo\"2\n" +
	"\x16ContentConnectResponse\x12\x18\n" +
	"\acontent\x18\x01 \x01(\tR\acontent\"g\n" +
	"\x1cContentConversationsResponse\x12G\n" +
	"\rconversations\x18\x01 \x03(\v2!.kpoppop.messages.v1.ConversationR\rconversations\"O\n" +
	"\x11ContentMarkAsRead\x12\x16\n" +
	"\x06convid\x18\x01 \x01(\tR\x06convid\x12\x0e\n" +
	"\x02to\x18\x02 \x01(\x05R\x02to\x12\x12\n" +
	"\x04from\x18\x03 \x01(\x05R\x04from\"\x83\x01\n" +
	"\x19ContentMarkAsReadResponse\x12\x16\n" +
	"\x06convid\x18\x01 \x01(\tR\x06convid\x12\x0e\n" +
	"\x02to\x18\x02 \x01(\x05R\x02to\x12\x16\n" +
	"\x06unread\x18\x03 \x01(\x05R\x06unread\x12\x12\n" +
	"\x04read\x18\x04 \x01(\bR\x04read\x12\x12\n" +
	"\x04from\x18\x05 \x01(\x05R\x04from*O\n" +
	"\tEventType\x12\x10\n" +
	"\fUNKNOWN_TYPE\x10\x00\x12\v\n" +
	"\aCONNECT\x10\x01\x12\x11\n" +
	"\rCONVERSATIONS\x10\x02\x12\x10\n" +
	"\fMARK_AS_READ\x10\x03B1Z/github.com/sonastea/kpoppop-grpc/ipc/go;messageb\x06proto3"

var (
	file_messages_proto_rawDescOnce sync.Once
	file_messages_proto_rawDescData []byte
)

func file_messages_proto_rawDescGZIP() []byte {
	file_messages_proto_rawDescOnce.Do(func() {
		file_messages_proto_rawDescData = protoimpl.X.CompressGZIP(unsafe.Slice(unsafe.StringData(file_messages_proto_rawDesc), len(file_messages_proto_rawDesc)))
	})
	return file_messages_proto_rawDescData
}

var file_messages_proto_enumTypes = make([]protoimpl.EnumInfo, 1)
var file_messages_proto_msgTypes = make([]protoimpl.MessageInfo, 7)
var file_messages_proto_goTypes = []any{
	(EventType)(0),                       // 0: kpoppop.messages.v1.EventType
	(*EventMessage)(nil),                 // 1: kpoppop.messages.v1.EventMessage
	(*Message)(nil),                      // 2: kpoppop.messages.v1.Message
	(*Conversation)(nil),                 // 3: kpoppop.messages.v1.Conversation
	(*ContentConnectResponse)(nil),       // 4: kpoppop.messages.v1.ContentConnectResponse
	(*ContentConversationsResponse)(nil), // 5: kpoppop.messages.v1.ContentConversationsResponse
	(*ContentMarkAsRead)(nil),            // 6: kpoppop.messages.v1.ContentMarkAsRead
	(*ContentMarkAsReadResponse)(nil),    // 7: kpoppop.messages.v1.ContentMarkAsReadResponse
}
var file_messages_proto_depIdxs = []int32{
	0, // 0: kpoppop.messages.v1.EventMessage.event:type_name -> kpoppop.messages.v1.EventType
	4, // 1: kpoppop.messages.v1.EventMessage.resp_connect:type_name -> kpoppop.messages.v1.ContentConnectResponse
	5, // 2: kpoppop.messages.v1.EventMessage.resp_convos:type_name -> kpoppop.messages.v1.ContentConversationsResponse
	6, // 3: kpoppop.messages.v1.EventMessage.req_read:type_name -> kpoppop.messages.v1.ContentMarkAsRead
	7, // 4: kpoppop.messages.v1.EventMessage.resp_read:type_name -> kpoppop.messages.v1.ContentMarkAsReadResponse
	2, // 5: kpoppop.messages.v1.Conversation.messages:type_name -> kpoppop.messages.v1.Message
	3, // 6: kpoppop.messages.v1.ContentConversationsResponse.conversations:type_name -> kpoppop.messages.v1.Conversation
	7, // [7:7] is the sub-list for method output_type
	7, // [7:7] is the sub-list for method input_type
	7, // [7:7] is the sub-list for extension type_name
	7, // [7:7] is the sub-list for extension extendee
	0, // [0:7] is the sub-list for field type_name
}

func init() { file_messages_proto_init() }
func file_messages_proto_init() {
	if File_messages_proto != nil {
		return
	}
	file_messages_proto_msgTypes[0].OneofWrappers = []any{
		(*EventMessage_RespConnect)(nil),
		(*EventMessage_RespConvos)(nil),
		(*EventMessage_ReqRead)(nil),
		(*EventMessage_RespRead)(nil),
	}
	file_messages_proto_msgTypes[1].OneofWrappers = []any{}
	file_messages_proto_msgTypes[2].OneofWrappers = []any{}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: unsafe.Slice(unsafe.StringData(file_messages_proto_rawDesc), len(file_messages_proto_rawDesc)),
			NumEnums:      1,
			NumMessages:   7,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_messages_proto_goTypes,
		DependencyIndexes: file_messages_proto_depIdxs,
		EnumInfos:         file_messages_proto_enumTypes,
		MessageInfos:      file_messages_proto_msgTypes,
	}.Build()
	File_messages_proto = out.File
	file_messages_proto_goTypes = nil
	file_messages_proto_depIdxs = nil
}
