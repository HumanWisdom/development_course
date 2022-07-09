import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-guidedquestion',
  templateUrl: './guidedquestion.component.html',
  styleUrls: ['./guidedquestion.component.css']
})
export class GuidedquestionComponent implements OnInit {
  guidedQuestion: any;
  guidedQuestionList: any[];
  upguidedQuestion: any;
  searchedTitle: string = '';
  backupGuidedList: any[];
  selectedTopicId:string='0'
  topicList:[]=[];
  constructor(private service: UsersService) {
    this.ClearInputBox();
    this.clearUpdateModel();
  }

  ngOnInit(): void {
    this.getTopics();
  }
  getTopics(){
    this.service.getGuidedQuestionTopics().subscribe(x=>{
      if(x){
       this.topicList=x; 
      }
    })
  }
  selectTopic(topicId){
    this.getQuestion(topicId);
  }
  addQuestion() {
    this.service.addGuidedQuestion(this.guidedQuestion).subscribe((x) => {
      if(this.guidedQuestion.TopicId!=''){
        this.getQuestion(this.guidedQuestion.TopicId);
        this.selectedTopicId=this.guidedQuestion.TopicId;
      }
      this.ClearInputBox();
      window.alert('Topics Saved successfully');
    });
  }

  reset() {
    this.ClearInputBox();
  }

  ClearInputBox() {
    this.guidedQuestion = {
     TopicId:'0',
     Question:''
    };
  }

  initUpdate(topicId) {
    let data = this.guidedQuestionList.filter((x) => x.RowID == topicId);
    if (data && data.length > 0) {
      this.upguidedQuestion.TopicId = data[0].topicID;
      this.upguidedQuestion.Question = data[0].Question;
      this.upguidedQuestion.QuestionID = data[0].RowID;
    }
  }

  getQuestion(topicId) {
    this.service.getGuidedQuestion(topicId).subscribe((res) => {
      this.guidedQuestionList = res;
      this.backupGuidedList = res;
    });
  }

  clearUpdateModel() {
    this.upguidedQuestion = {
      topicId:'0',
      Question:'',
      QuestionID:''
    };
  }

  updateTopicById(topicId) {
    this.service.addGuidedQuestion(this.upguidedQuestion).subscribe(
      (res) => {
        if (res) {
          window.alert('Topics updated successfully');
          this.getQuestion(topicId);
        }
      },
      (error) => {
        console.log(error.error.Message);
        window.alert(error.error.Message);
      }
    );
  }

  searchTitle() {
    if (this.searchedTitle == '') {
      this.guidedQuestionList = this.backupGuidedList;
    } else {
      this.guidedQuestionList = this.backupGuidedList.filter((x) =>
        x.Topic.toLowerCase().includes(this.searchedTitle.toLowerCase())
      );
    }
  }
  updateQuestionById(){
    this.service.addGuidedQuestion(this.upguidedQuestion).subscribe(x=>{
      if(x){
        alert('Updated Sucessfully');
      }
    })
  }

  deleteTopic(id){
    var retVal = confirm("Are you sure you want to delete?");
    if( retVal == true ) {
      this.service.deleteGuidedQuestion({ "Id":parseInt(id)}).
      subscribe(res=>
        {
        },
        error=>{
          console.log(error)
        },
        ()=>{
          window.alert('Question deleted successfully')
          this.getQuestion(this.selectedTopicId)
        }
      )
    } else {
      return false;
    }

  }
}