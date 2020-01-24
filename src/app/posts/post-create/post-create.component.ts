import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})

export class PostCreateComponent implements OnInit {
  @Output() postCreated =  new EventEmitter();
   
  postName:string;
  postContent:string;
  status:boolean=false;
  constructor() {
    setTimeout(() => {
      this.status = true;
    },3000)
   }

  onAddPost()
  {
    const post = {title: this.postName, content: this.postContent};
    console.log(post);
    this.postCreated.emit(post);//emitting our own event...
  }

  ngOnInit() {
  }

}
