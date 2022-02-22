import { Component, EventEmitter, Input, Output, OnInit } from "@angular/core";
import { UniqueIdService } from "../../services/unique-id/unique-id.service";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-like-widget',
  templateUrl: './like-widget.component.html',
  styleUrls: ['like-widget.component.scss']

})

export class LikeWidgetComponent implements OnInit {
  @Output() public liked = new EventEmitter<void>();
  @Input()  public likes: number = 0;
  @Input() public id: string = null
  fonts = { faThumbsUp }

  constructor(private uniqueIdService: UniqueIdService){}

  public ngOnInit():void {
    if(!this.id) {
      this.id = this.uniqueIdService.generateUniqueIdWithPrefix('like-widget');
    }
  }

  public like():void {
    this.liked.emit();
  }
}
