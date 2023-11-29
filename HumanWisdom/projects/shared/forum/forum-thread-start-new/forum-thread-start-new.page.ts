import { Component, OnInit, ViewChild,AfterViewInit } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { ForumService } from '../forum.service';
import { filter } from 'rxjs/operators';
import { ProgramType } from '../../models/program-model';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-forum-thread-start-new',
  templateUrl: './forum-thread-start-new.page.html',
  styleUrls: ['./forum-thread-start-new.page.scss'],
})
export class ForumThreadStartNewPage implements OnInit,AfterViewInit {
  thread = '';
  userID = "107";
  postID = '0';
  selectedOption: number = 0;
  userinfo = {
    userimage: null,
    username: '',
  };
  buttonText:string ="Choose Category"
  imageUrl: string | ArrayBuffer | null = null;
  isChecked = false;
  categoryList: any = [];
  fileToUpload: File = null;
  @ViewChild('postModal') postModal: any;
  @ViewChild('checkboxSelect') checkboxSelect: any;
  @ViewChild('closeCategory') closeCategory: any;
  programType: ProgramType.Adults;
  isSubscriber:boolean;
  constructor(private service: ForumService, private router: Router, private route: ActivatedRoute) {
    this.userID = localStorage.getItem('userId');
    this.router.events
      .pipe(filter(e => e instanceof NavigationStart))
      .subscribe((e: NavigationStart) => {
        const navigation = this.router.getCurrentNavigation();
        this.programType = navigation.extras.state ? navigation.extras.state.programType : ProgramType.Adults;
      });
    this.getuserDetails();
    let p = localStorage.getItem('postid');
    if (p !== 'null') {
      console.log(p);
      this.postID = p;
    }
    this.isSubscriber = SharedService.isSubscriber(); 
  }

  ngOnInit() {
   
  }

  ngOnDestroy(): void {
    localStorage.setItem('postid', null);
  }

  getuserDetails() {
    this.service.getUserDetail(this.userID).subscribe(res => {
      if (res) {
        ;
        this.userinfo.username = res[0].FName + ' ' + res[0].LName;
        this.userinfo.userimage = res[0].UserImage;
      }
    });
  }
  post() {
    if(this.selectedOption!=0 && this.buttonText !='Choose Category'){
         this.submitPost();
    }else{
      this.selectedOption=0;
    }
  }

  getPlaceHolder(){
    if(this.selectedOption == 5){
      return "Ask one of our trained coaches a question on any of the topics covered in the app. You can ask a question anonymously. The answers will be visible to all."
    }else{
      return "Talk about issues related to stress, anxiety, depression and mental health."
    }
  }

  submitPost(){
    this.service.submitPost(
      {
        Post: this.thread,
        UserId: this.userID,
        ParentPostID: this.postID,
        ReflectionID: '0',
        TagIds: this.selectedOption.toString(),
        Anonymous: this.isChecked ? "1" : "0",
        PostImg: this.fileToUpload
      }
    ).subscribe(res => {
      if (res) {
        localStorage.setItem('postid', null);
        this.postModal.nativeElement.click();
        this.thread = "";
        this.postID = "",
        this.selectedOption = 0;
      }
    })
  }

  closePost() {
    this.router.navigateByUrl('/forum', { state: { programType: this.programType } });
  }

  getFileUpload(event) {
    this.imageUrl = null;
    const files = event.target.files;
    if (files.length === 0)
      return;

    const mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }
    const reader = new FileReader();
    // this.fileToUpload = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      let byte: any = reader.result;
      this.imageUrl=_event.target.result;
      byte = byte.split('base64,')
      if (byte[1] !== undefined && byte[1] !== '') {
      this.fileToUpload = byte[1];
      }
    }
  }

  closeCategoryModal(){
    this.closeCategory.nativeElement.click();
  }
  filterBasedOnTags(value){
    this.selectedOption = parseInt(value);
    const data = this.categoryList.filter(x=>x.value== this.selectedOption);
    if(data!=null && data.length>0){
      this.buttonText =  data[0].label;
    }
    setTimeout(() => {
      this.closeCategoryModal();
    }, 100);
  }


  ngAfterViewInit(){
    setTimeout(()=>{
      this.categoryList = this.service.GetTagList();
      this.selectedOption = localStorage.getItem('tagId') && localStorage.getItem('tagId') != null ? parseInt(localStorage.getItem('tagId')) : 0;
      if (this.selectedOption == 5) {
      this.isChecked = true;
  

      const data = this.categoryList.filter(x=>x.value== this.selectedOption);
      if(data!=null && data.length>0){
        this.buttonText =  data[0].label;
      }
    }},1000);
    setTimeout(()=>{
    let el= document.getElementById('forum_post_checkbox') as any;
    if(el){
     el.checked = true;
    }},4000);
  }

}
