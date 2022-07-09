import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
@Component({
  selector: 'app-guidedquestiontopics',
  templateUrl: './guidedquestiontopics.component.html',
  styleUrls: ['./guidedquestiontopics.component.css'],
})
export class GuidedquestiontopicsComponent implements OnInit {
  guidedTopics: any;
  guidedTopicsList: any[];
  upguidedTopics: any;
  searchedTitle: string = '';
  backupGuidedList: any[];

  constructor(private service: UsersService) {
    this.ClearInputBox();
    this.clearUpdateModel();
  }

  ngOnInit(): void {
    this.getTopics();
  }

  addTopics() {
    this.service.addGuidedTopics(this.guidedTopics).subscribe((x) => {
      this.getTopics();
      this.ClearInputBox();
      window.alert('Topics Saved successfully');
    });
  }

  reset() {
    this.ClearInputBox();
  }

  ClearInputBox() {
    this.guidedTopics = {
      introduction: '',
      Topic: '',
      url: '',
    };
  }

  initUpdate(topicId) {
    this.clearUpdateModel();
    let data = this.guidedTopicsList.filter((x) => x.RowID == topicId);
    if (data && data.length > 0) {
      this.upguidedTopics.Topic = data[0].Topic;
      this.upguidedTopics.url = data[0].Landing_URL;
      this.upguidedTopics.introduction = data[0].introduction;
      this.upguidedTopics.TopicId = topicId;
    }
  }

  getTopics() {
    this.service.getGuidedQuestionTopics().subscribe((res) => {
      this.guidedTopicsList = res;
      this.backupGuidedList = res;
    });
  }

  clearUpdateModel() {
    this.upguidedTopics = {
      introduction: '',
      Topic: '',
      url: '',
      TopicId: '',
    };
  }

  updateTopicById() {
    this.service.addGuidedTopics(this.upguidedTopics).subscribe(
      (res) => {
        if (res) {
          window.alert('Topics updated successfully');
          this.getTopics();
        }
      },
      (error) => {
        console.log(error.error.Message);
        window.alert(error.error.Message);
      }
    );
  }

  deleteTopic(id){
    var retVal = confirm("Are you sure you want to delete?");
    if( retVal == true ) {
      this.service.deleteTopic({ "Id":parseInt(id)}).
      subscribe(res=>
        {
        },
        error=>{
          console.log(error)
        },
        ()=>{
          window.alert('Topic deleted successfully')
          this.getTopics()
        }
      )
    } else {
      return false;
    }

  }

  searchTitle() {
    if (this.searchedTitle == '') {
      this.guidedTopicsList = this.backupGuidedList;
    } else {
      this.guidedTopicsList = this.backupGuidedList.filter((x) =>
        x.Topic.toLowerCase().includes(this.searchedTitle.toLowerCase())
      );
    }
  }

}
