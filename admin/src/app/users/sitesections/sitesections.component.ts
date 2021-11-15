import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import {UsersService} from '../users.service'

@Component({
  selector: 'app-sitesections',
  templateUrl: './sitesections.component.html',
  styleUrls: ['./sitesections.component.css']
})
export class SitesectionsComponent implements OnInit {
  newSiteSection:any
  updatedSiteSection:any
  searchedSiteSection:any
  siteSectionList:any

  constructor(private router: Router,private service:UsersService, private location:Location) { }

  ngOnInit() {
    this.getSiteSection()
  }
  getSiteSection(){
    this.service.getSiteSections().subscribe(res=>
      {
        console.log(res)
        this.siteSectionList=res;
       
        console.log(this.siteSectionList)
       // localStorage.setItem("programList",JSON.stringify(this.programList))
      
      }
    )
  }

  addSiteSection(){
    console.log(this.newSiteSection)
    this.service.addSiteSection({ "SiteSectID":0,"SiteSect":this.newSiteSection}).
    subscribe(res=>
      {
      console.log(res)
      },
      error=>{
        console.log(error)
      },
      ()=>
        {this.getSiteSection()}
    )



  }

  updateSiteSection(id){
    console.log(id)
    this.service.addSiteSection({ "SiteSectID":id,"SiteSect":this.updatedSiteSection}).
    subscribe(res=>
      {
      console.log(res)
      },
      error=>{
        console.log(error)
      },
      ()=>
        {this.getSiteSection()}
    )



  }

  deleteSiteSection(id){
    console.log(id)
    this.service.deleteSiteSection({ "Id":parseInt(id)}).
    subscribe(res=>
      {
      console.log(res)
      },
      error=>{
        console.log(error)
      },
      ()=>
        {this.getSiteSection()}
    )


  }

  searchSiteSection(){
    //console.log("searching",this.searchedSiteSection)
    if(this.searchedSiteSection="")
      this.getSiteSection()
    else{
      this.siteSectionList=this.siteSectionList.filter(res=>{
        return res.SiteSection.toLocaleLowerCase().match(this.searchedSiteSection.toLocaleLowerCase())
      })
    }

  }
  reset(){
    this.newSiteSection=""

  }

}
