import { Component, OnInit, Input } from '@angular/core';
import { IConversation } from 'src/app/model/conversation.model';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.css']
})
export class ConversationComponent implements OnInit {
@Input() activeConversation: IConversation ;
  activeCoversationItem = {} ;
  constructor() {
  }

  ngOnInit() {
    console.log(this.activeConversation);
    this.activeConversation.conversation.forEach(conv => {
      this.activeCoversationItem = {
        conversation_id: this.activeConversation.conversation_id,
        creator_id: this.activeConversation.creator_id,
        userDetail: this.activeConversation.userDetail,
        conversation: conv
      };
     });
     console.log(this.activeCoversationItem);
  }
}
