import { Component} from '@angular/core';
import {UserConversation, Message} from '../../model/conversation.model' ;
import { User } from 'src/app/model/user.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent  {
  value: any;
  conversationList: Array<UserConversation> = [];
  activeConversation: UserConversation ;
  constructor() { }
  addNewConversation() {
    const conversationItem = new UserConversation () ;
    const message = new Message('New Chat');
    message.new = true;
    conversationItem.conversation_id = '' ;
    conversationItem.creator_id = '';
    conversationItem.userDetail = new User();
    conversationItem.userDetail.imgUrl =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1iIU81Vuy0tiOAeQ1jFOsPMSpH9pFxYijqkvtNnCQn6mzon8OIA' ;
    conversationItem.conversation.set('new', message) ;
    this.activeConversation = conversationItem;
    this.conversationList.push(conversationItem);
  }
}
