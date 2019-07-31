import {IUser, User} from './user.model';

export interface IMesaage {
    sender_id: string;
    sender_name: string;
    message: string;
    message_id: string;
    timestamp: Date ;
}
export interface IConversation {
    userDetail ?: IUser;
    creator_id: string;
    conversation_id: string;
    conversation: Array<IMesaage>;
}

export class Message {
   public sender_id: string;
   public sender_name: string;
   public message: string;
   public message_id: string;
   public timestamp: Date ;
   public new: Boolean = false ;
   constructor(message) {
    this.message = message;
   }
}

export class UserConversation {
   public userDetail: User;
   public creator_id: string;
   public conversation_id: string;
   public conversation:  Map<string, Message>;
   constructor() {
       this.conversation = new Map<string, Message>();
   }
}
