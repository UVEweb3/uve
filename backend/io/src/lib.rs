
#![no_std]

use gmeta::{In, InOut, Metadata};
use gstd::{prelude::*, ActorId};

pub struct ProgramMetadata;

// 1. Define actions, events, errors and state for your metadata.
impl Metadata for ProgramMetadata {
    type Init = In<InitStruct>;
    type Handle = InOut<Actions, Result<Events, Errors>>;
    type Others = ();
    type Reply = ();
    type Signal = ();
    type State = InOut<Query, Reply>;
}

// 2. Create your init Struct(Optional)
#[derive(Decode, Encode, TypeInfo)]
#[codec(crate = gstd::codec)]
#[scale_info(crate = gstd::scale_info)]
pub struct InitStruct {
    // Example:
    pub ft_program_id: ActorId,
}

// 3. Create your own Actions
#[derive(Debug, Decode, Encode, TypeInfo)]
#[codec(crate = gstd::codec)]
#[scale_info(crate = gstd::scale_info)]
pub enum Actions {
    // Actions
    CreateUver(ActorId, UverData),
    CreateChannel(ChannelData),
    CreateEvent(u128,UverData),
    SuscribeUver(u128, ActorID),
    LikeEvent(u128,ActorID),
    StartEvent(u128),
    FinishEvent(u128),
    AttendEvent(u128,ActorID),
    ViewedEvent(u128,ActorID),
}

// Add Your Main State
#[derive(Debug, Decode, Encode,  Clone, TypeInfo)]
#[codec(crate = gstd::codec)]
#[scale_info(crate = gstd::scale_info)]
pub struct IoState {
    pub admins: Vec<ActorId>,
    pub Uvers: HashMap<ActorId, UverData>,
    pub Channels: HashMap<u128, ChannelData>,
    pub Events: HashMap<u128, EventData>,
}

// 5. Create your own Errors
#[derive(Debug, Decode, Encode, TypeInfo)]
#[codec(crate = gstd::codec)]
#[scale_info(crate = gstd::scale_info)]
pub enum Errors {


}

// 6. Create your own Struct
#[derive(Debug, Decode, Encode, TypeInfo)]
#[codec(crate = gstd::codec)]
#[scale_info(crate = gstd::scale_info)]
pub struct CustomFields {
    
}

#[derive(Debug, Decode, Encode, TypeInfo)]
#[codec(crate = gstd::codec)]
#[scale_info(crate = gstd::scale_info)]
pub struct ChannelData {    
    name: String,
    about: String,
    logo: String,
    banner: String,
    socials: Vec<String>,
    community: String,
    owner: ActorId,
    members: Vec<ActorId>
}

#[derive(Debug, Decode, Encode, TypeInfo)]
#[codec(crate = gstd::codec)]
#[scale_info(crate = gstd::scale_info)]
pub struct UverData {    
    name: String,
    about: String,
    avatar: u128,
    handle: String,
    socials: Vec<String>,
}

#[derive(Debug, Decode, Encode, TypeInfo)]
#[codec(crate = gstd::codec)]
#[scale_info(crate = gstd::scale_info)]
pub struct EventData {    
    name: String,
    category: String,
    date: String,
    likes: u128,
    views: u128,
    channel: u128,
    description: String,
    emission: String,
    miniature: String,
    cert: ActorId
    attendees: Vec<ActorId>
}
// 7. Create your own enum


#[derive(Debug, Decode, Encode, TypeInfo, Clone, Default)]
#[codec(crate = gstd::codec)]
#[scale_info(crate = gstd::scale_info)]
pub struct CustomStruct {
    // Add your fields
}

#[derive(Encode, Decode, TypeInfo)]
#[codec(crate = gstd::codec)]
#[scale_info(crate = gstd::scale_info)]
pub enum Query {
    UverQuery
}

#[derive(Encode, Decode, TypeInfo)]
#[codec(crate = gstd::codec)]
#[scale_info(crate = gstd::scale_info)]
pub enum Reply {
    UversReply(HashMap<ActorId, UverData>),
    ChannelsReply(HashMap<u128, ChannelData>),    
    EventsReplay(HashMap<u128, EventData>),
}

