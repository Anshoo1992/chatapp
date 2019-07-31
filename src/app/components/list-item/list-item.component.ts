import { Component, OnInit, Input } from '@angular/core';
import { UserConversation, IConversation } from 'src/app/model/conversation.model';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {
  @Input() conversationList: Array<IConversation>;
  userConversationList:  Array<any> = [];
  constructor() {
  }

  ngOnInit() {
   this.conversationList.forEach(item => {
     item.conversation.forEach(conv => {
      this.userConversationList.push( {
        conversation_id: item.conversation_id,
        creator_id: item.creator_id,
        userDetail: item.userDetail,
        conversation: conv
      });
     });
   });
  }
}
