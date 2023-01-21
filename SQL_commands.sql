create database Whatsapp_Storage;
create table user (
    UserName varchar(255),
    UserId varchar(255),
    PhoneNo int
    /* user details*/
);

create table user_groups (
    groupId varchar(255)
    /*storing the group id  of the group the user is a part of*/
);

create table whatsapp_group (
    UserId varchar(255),
    groupId varchar(255)

    /*mapping users in group using group id*/
);

create table message (
    MessageType varchar(255),
    MessageContent varchar(255),
    groupId varchar(255)

    /*message details*/
);