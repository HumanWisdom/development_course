import { Component, OnInit } from '@angular/core';
import {AdultsService} from "../../adults.service"
import { ActivatedRoute, Router } from '@angular/router';
import {Location } from '@angular/common'

import { AssignKeyPage } from 'src/app/onboarding/assign-key/assign-key.page';
import { NgNavigatorShareService } from 'ng-navigator-share';

@Component({
  selector: 'app-view-stories',
  templateUrl: './view-stories.page.html',
  styleUrls: ['./view-stories.page.scss'],
})
export class ViewStoriesPage implements OnInit {
  story:any
  links: Array<{id: number, module: string,route: string}> = []
  modules=[]
  socialShare=false
  path="https://humanwisdom.me/course/wisdom-stories/view-stories"

  userId:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  qrList:any
 
  urlT:any
  sId:any
  storyList=[]

  constructor(private router: Router,
    private service:AdultsService,private ngNavigatorShareService: NgNavigatorShareService,
    private location:Location, private route: ActivatedRoute) {
      this.route.queryParams.subscribe(params => {
        this.sId=params?.sId
    });
      this.urlT=this.router.getCurrentNavigation()?.extractedUrl.queryParams.t
     

     }

  ngOnInit() {
    this.userId=JSON.parse(sessionStorage.getItem("userId"))
      this.getStories(this.sId)
  }
  assignLinks(){

    this.links=[]
 
    for(var i=0;i<this.modules.length;i++)
    {
      
      var id=this.modules[i]
      switch(this.modules[i])
    {
      case 7:{
     
        this.links.push({'id':7,'module':"Comparison & Envy",'route':'/adults/comparison'})
        break
       }
      case 27:{
     
        this.links.push({'id':27,'module':"Discovering Wisdom",'route':'/adults/discovering-wisdom'})
        break
       }
       case 32:{
     
        this.links.push({'id':32,'module':"Benefits of Wisdom",'route':'/adults/benefits-of-wisdom'})
        break
       }
       case 33:{
     
        this.links.push({'id':33,'module':"5 Circles of Wisdom",'route':'/adults/five-circles'})
        break
       }
       case 34:{
     
        this.links.push({'id':34,'module':"Key Ideas",'route':'/adults/key-ideas'})
        break
       }
       case 35:{
     
        this.links.push({'id':35,'module':"Program Guide",'route':'/adults/program-guide'})
        break
       }
       case 28:{
     
        this.links.push({'id':28,'module':"Nature",'route':'/adults/nature'})
        break
       }
       case 29:{
     
        this.links.push({'id':29,'module':"Breathing",'route':'/adults/breathing'})
        break
       }
       case 30:{
     
        this.links.push({'id':30,'module':"Noticing Thoughts",'route':'/adults/noticing-thoughts'})
        break
       }
       case 22:{
     
        this.links.push({'id':21,'module':"Meditation",'route':'/adults/meditation'})
        break
       }
       case 51:{
     
        this.links.push({'id':50,'module':"Guided Audio Meditation",'route':'/adults/guided-meditation'})
        break
       }
       case 26:{
     
        this.links.push({'id':26,'module':"Benefits of Enquiry",'route':'/adults/benefits-of-enquiry'})
        break
       }
       case 36:{
     
        this.links.push({'id':36,'module':"How to Begin?",'route':'/adults/how-to-begin'})
        break
       }
       case 37:{
     
        this.links.push({'id':37,'module':"Three Steps to Enquiry",'route':'/adults/three-steps-enquiry'})
        break
       }
       case 38:{
     
        this.links.push({'id':38,'module':"Insight",'route':'/adults/insight'})
        break
       }
       case 39:{
     
        this.links.push({'id':39,'module':"Awareness",'route':'/adults/awareness'})
        break
       }
       case 40:{
     
        this.links.push({'id':40,'module':"No Judgement",'route':'/adults/no-judgement'})
        break
       }
       case 41:{
     
        this.links.push({'id':41,'module':"Questions are Key",'route':'/adults/questions-are-key'})
        break
       }
       case 42:{
     
        this.links.push({'id':42,'module':"Look without Language",'route':'/adults/without-language'})
        break
       }
       case 43:{
     
        this.links.push({'id':43,'module':"Obstacles to Enquiry",'route':'/adults/obstacles-enquiry'})
        break
       }
       case 15:{
      
        this.links.push({'id':15,'module':"Conditioning",'route':'/adults/conditioning'})
        break
       }
       case 54:{
     
        this.links.push({'id':54,'module':"Reactive Mind",'route':'/adults/reactive-mind'})
        break
       }
       case 25:{
     
        this.links.push({'id':25,'module':"Self Image",'route':'/adults/self-image'})
        break
       }
       case 55:{
     
        this.links.push({'id':55,'module':"Self Interest",'route':'/adults/self-interest'})
        break
       }
       case 21:{
     
        this.links.push({'id':21,'module':"Identity",'route':'/adults/identity'})
        break
       }
       case 18:{
     
        this.links.push({'id':17,'module':"Emotional Needs",'route':'/adults/emotional-needs'})
        break
       }
       case 56:{
     
        this.links.push({'id':56,'module':"Inner Boredom",'route':'/adults/inner-boredom'})
        break
       }
       case 57:{
     
        this.links.push({'id':57,'module':" The Nature of  The I",'route':'/adults/nature-of-i'})
        break
       }
       case 19:{
     
        this.links.push({'id':19,'module':"Fear & Anxiety",'route':'/adults/fear-anxiety'})
        break
       }
       case 20:{
     
        this.links.push({'id':19,'module':"Pleasure",'route':'/adults/pleasure'})
        break
       }
       case 60:{
     
        this.links.push({'id':60,'module':"Sorrow and Loss",'route':'/adults/sorrow'})
        break
       }
       case 61:{
     
        this.links.push({'id':61,'module':"Loneliness",'route':'/adults/loneliness'})
        break
       }
       case 14:{
        this.links.push({'id':14,'module':"Anger",'route':'/adults/anger'})
        break
       }
       case 44:{
     
        this.links.push({'id':44,'module':"Stress",'route':'/adults/stress'})
        break
       }
       case 47:{
     
        this.links.push({'id':47,'module':"Relationships",'route':'/adults/relationships'})
        break
       }
       case 62:{
     
        this.links.push({'id':62,'module':"Love",'route':'/adults/love'})
        break
       }
       case 16:{
      
        this.links.push({'id':15,'module':"Criticism",'route':'/adults/criticism'})
        break
       }
      
       case 17:{
     
        this.links.push({'id':17,'module':"Self Esteem",'route':'/adults/self-esteem'})
        break
       }
       case 63:{
     
        this.links.push({'id':63,'module':"Living With Peace",'route':'/adults/living-with-peace'})
        break
       }
       case 64:{
     
        this.links.push({'id':64,'module':"Dealing with Death",'route':'/adults/dealing-with-death'})
        break
       }
       case 23:{
     
        this.links.push({'id':23,'module':"Happiness",'route':'/adults/happiness'})
        break
       }
       case 53:{
     
        this.links.push({'id':53,'module':"Communication",'route':'/adults/communication'})
        break
       }
       case 49:{
     
        this.links.push({'id':49,'module':"Opinions and Beliefs",'route':'/adults/opinions-beliefs'})
        break
       }
       case 48:{
     
        this.links.push({'id':48,'module':"Success and Failure",'route':'/adults/success-failure'})
        break
       }
       case 45:{
     
        this.links.push({'id':45,'module':"Addiction",'route':'/adults/habit-addiction'})
        break
       }
       case 46:{
     
        this.links.push({'id':46,'module':"Food and Health",'route':'/adults/food-health'})
        break
       }
       case 73:{
     
        this.links.push({'id':73,'module':"Money",'route':'/adults/money'})
        break
       }
       case 58:{
     
        this.links.push({'id':58,'module':" Work",'route':'/adults/work'})
        break
       }
       case 59:{
     
        this.links.push({'id':59,'module':"Leadership",'route':'/adults/leadership'})
        break
       }
      
    }
  }
 
  }

  addToken(){
    this.ngNavigatorShareService.share({
      title: 'HumanWisdom Program',
      text: 'Hey, check out the HumanWisdom Program',
      url: this.path+'?sId='+this.sId +'&t='+ JSON.parse(localStorage.getItem("token"))
    }).then( (response) => {
    })
    .catch( (error) => {
      console.log(error);
    });
    this.socialShare=true
  }
  
  goBack(){
    this.location.back()
  }

  getStories(id){
    this.service.getScenarioswithId(id).subscribe(res=>
      {
        
        this.storyList=res
        //localStorage.setItem("storyList",JSON.stringify(this.storyList))
      },
      error=>console.log(error),
      ()=>{
        if(this.storyList.length !==0) {
          this.story=this.storyList.find(s=>s.ScenarioID==this.sId)
          var id=this.story.ScenarioID
          if(this.story.hasOwnProperty('ModIds')) {
            this.modules=this.story.ModIds.split`,`.map(x=>+x)
            this.assignLinks()
          }
        }
      
        
      }
    )
  }

  loadReflections(id){
    
    this.service.clickModule(id,this.userId)
    .subscribe(res=>
      {
        this.qrList=res
        localStorage.setItem("qrList",JSON.stringify(this.qrList))
    })
  }

}
