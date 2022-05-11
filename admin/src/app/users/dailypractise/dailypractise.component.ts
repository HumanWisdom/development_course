import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UsersService } from '../users.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dailypractise',
  templateUrl: './dailypractise.component.html',
  styleUrls: ['./dailypractise.component.css']
})
export class DailypractiseComponent implements OnInit {
  dailypractiseList;
  dailypractisetypeList;
  textURL;
  Title = '';
  updateparctiseType;
  updatetextURL;
  updatetextTitle = '';
  parctiseType;
  textURLtype;
  PractiseTypeID;
  PractiseID;
  updateTexttype;
  searcheddaily;
  enabletitle = false;
  updateenabletitle = false;

  constructor(private service:UsersService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getdaily()
    this.getdailytype()
  }

  getdailytype() {
    this.service.getdailypracticetype().subscribe(res=>
      {
        this.dailypractisetypeList=res;
      }
    )
  }

  reset(){
    this.textURL = '';
    this.parctiseType = '';
    this.textURLtype = '';
    this.Title = '';
  }

  getdaily() {
    this.service.getdailypractice().subscribe(res=>
      {
        this.dailypractiseList=res;
      }
    )
  }

  addDaily() {
    if(!(this.validate(this.textURLtype, this.textURL))) {
      window.alert('URL type is invalid')
    }else {
      this.service.adddailypractice({
        "PractiseTypeID":this.parctiseType,
        "Text_URL":this.textURL,
        "Title":this.Title,
          })
        .subscribe(res=>
          {
          this.reset()
          },
          error=>{
          },
          ()=>{
            window.alert('Daily Practise added successfully')
            this.getdaily()
          }
        )

    }

  }

  selecttype(value) {
    let filter = this.dailypractisetypeList.filter((res) => res['RowID'].toString() === value);
    this.textURLtype = filter[0]['Type']
    let typeobj = this.dailypractisetypeList.filter((res) => res['RowID'].toString() === value);
    if(typeobj[0]['DailyPractise'] === 'Breathing Exercise' || typeobj[0]['DailyPractise'] === 'Audio Meditation') {
      this.enabletitle = true;
    }else {
      this.enabletitle = false;
    }
  }


  updateselecttype(value) {
    let filter = this.dailypractisetypeList.filter((res) => res['DailyPractise'].toString() === value);
    this.updateTexttype = filter[0]['Type']
  }



  deletedaily(id) {
    var retVal = confirm("Are you sure you want to delete?");
    if( retVal == true ) {
      this.service.deletedailypractice(id).
      subscribe(res=>
        {
        },
        error=>{
        },
        ()=>{
          window.alert('Daily Practise deleted successfully')
          this.getdaily()
        }
      )
    } else {
      return false;
    }

  }

  searchDaily(){
    if(this.searcheddaily=="")
    this.getdaily()
  else{
    this.dailypractiseList=this.dailypractiseList.filter(res=>{
      return res.DailyPractise.toLocaleLowerCase().match(this.searcheddaily.toLocaleLowerCase())

    })
  }

  }

  initUpdate(id,type, daily, texturl, title){
    let filter = this.dailypractisetypeList.filter((res) => res['DailyPractise'] === daily)
    if(filter[0]['DailyPractise'] === 'Breathing Exercise' || filter[0]['DailyPractise'] === 'Audio Meditation') {
      this.updateenabletitle = true;
    }else {
      this.updateenabletitle = false;
    }
    this.PractiseID=id
    this.updateparctiseType=daily
    this.updatetextURL = texturl
    this.updatetextTitle = title
    this.updateTexttype = filter[0]['Type']
  }

  updatedaily(id) {
    if(!(this.validate(this.updateTexttype, this.updatetextURL))) {
      window.alert('URL type is invalid')
    }else {
      let filter = this.dailypractisetypeList.filter((res) => res['DailyPractise'] === this.updateparctiseType)
    this.PractiseTypeID = filter[0]['RowID']
    this.service.updatedailypractice({
      "PractiseID": this.PractiseID,
    "PractiseTypeID": this.PractiseTypeID,
    "Text_URL":this.updatetextURL,
    "Title": this.updatetextTitle
  })
      .subscribe(res=>
        {
        },
        error=>{
        },
        ()=>{
          this.modalService.dismissAll();
          window.alert('Daily Practise updated successfully')
          this.getdaily()
        }
      )
    }

  }

  validate(type, text: string) {
    if(type === 'Text') {
      return true;
    }else if(type === 'Video URL'){
      return text.includes('mp4')
    }else {
      return text.includes('mp3')
    }
  }

}
