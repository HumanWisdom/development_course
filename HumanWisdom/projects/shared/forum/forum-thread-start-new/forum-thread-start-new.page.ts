import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { ForumService } from '../forum.service';
import { filter } from 'rxjs/operators';
import { ProgramType } from '../../models/program-model';

@Component({
  selector: 'app-forum-thread-start-new',
  templateUrl: './forum-thread-start-new.page.html',
  styleUrls: ['./forum-thread-start-new.page.scss'],
})
export class ForumThreadStartNewPage implements OnInit {
  thread = '';
  userID = "107";
  postID = '0';
  selectedOption: number = 1;
  userinfo = {
    userimage: null,
    username: '',
  };
  isChecked = false;
  categoryList: any = [];
  fileToUpload: File = null;
  @ViewChild('postModal') postModal: any;
  @ViewChild('checkboxSelect') checkboxSelect: any;
  programType: ProgramType.Adults;
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
  }

  ngOnInit() {
    this.selectedOption = localStorage.getItem('tagId') && localStorage.getItem('tagId') != null ? parseInt(localStorage.getItem('tagId')) : 1;
    if (this.selectedOption == 5) {
      this.isChecked = true;
      // this.checkboxSelect.nativeElement.checked = true;
    }
    this.categoryList = this.service.GetTagList();
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
    this.service.submitPost(
      {
        Post: this.thread,
        UserId: this.userID,
        ParentPostID: this.postID,
        ReflectionID: '0',
        TagIds: this.selectedOption.toString(),
        Anonymourse: this.isChecked ? "1" : "0",
        ImagePath: this.fileToUpload
      }
    ).subscribe(res => {
      if (res) {
        localStorage.setItem('postid', null);
        this.postModal.nativeElement.click();
        this.thread = "";
        this.postID = "",
          this.selectedOption = 1;
      }
    })

  }

  closePost() {
    this.router.navigateByUrl('/forum', { state: { programType: this.programType } });
  }

  getFileUpload(event) {
    const files = event.target.files;
    if (files.length === 0)
      return;

    const mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }
    const reader = new FileReader();
    this.fileToUpload = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      let byte: any = reader.result;
      byte = byte.split('base64,')
      if (byte[1] !== undefined && byte[1] !== '') {
        let obj = {
          "byteArray": byte[1]
        }
      }
    }
  }


}
