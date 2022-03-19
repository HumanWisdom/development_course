import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-dailypractise',
  templateUrl: './dailypractise.component.html',
  styleUrls: ['./dailypractise.component.css']
})
export class DailypractiseComponent implements OnInit {
  dailypractiseList;
  dailypractisetypeList;
  textURL;
  updateparctiseType;
  updatetextURL;
  parctiseType;
  textURLtype;
  PractiseTypeID;
  PractiseID;
  updateTexttype;
  searcheddaily;

  constructor(private service:UsersService) { }

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
  }

  getdaily() {
    this.service.getdailypractice().subscribe(res=>
      {
        this.dailypractiseList=res;
      }
    )
  }

  addDaily() {
    this.service.adddailypractice({
      "PractiseTypeID":this.parctiseType,
      "Text_URL":this.textURL,
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

  selecttype(value) {
    let filter = this.dailypractisetypeList.filter((res) => res['RowID'].toString() === value);
    this.textURLtype = filter[0]['Type']
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

  initUpdate(id,type, daily, texturl){
    this.PractiseID=id
    this.updateparctiseType=daily
    this.updatetextURL = texturl
  }

  updatedaily(id) {
    let filter = this.dailypractisetypeList.filter((res) => res['DailyPractise'] === this.updateparctiseType)
    this.PractiseTypeID = filter[0]['RowID']
    this.service.updatedailypractice({
      "PractiseID": this.PractiseID,
    "PractiseTypeID": this.PractiseTypeID,
    "Text_URL":this.updatetextURL
  })
      .subscribe(res=>
        {
        },
        error=>{
        },
        ()=>{
          window.alert('Daily Practise updated successfully')
          this.getdaily()
        }
      )
  }

}
