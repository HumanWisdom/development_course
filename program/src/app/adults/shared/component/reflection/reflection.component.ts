import { Component, OnInit ,Input,Output, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
import { AdultsService } from 'src/app/adults/adults.service';
@Component({
  selector: 'app-reflection',
  templateUrl: './reflection.component.html',
  styleUrls: ['./reflection.component.scss'],
})
export class ReflectionComponent implements OnInit {
  //reflectionResponses:any
  @Input() reflection: string;
  @Input() hint: string;
  @Input() bg: string;
  @Input() reflectionResponse: string;
  @Input() toc: string;
  @Output() sendResponse = new EventEmitter<string>();
  @Output() goPrevious = new EventEmitter<string>();
  shared:any
  confirmed:any
  path=this.router.url
  scrNumber:any
  progress:any
 
  constructor(public router:Router,public service:AdultsService) { }

  ngOnInit() {
    var lastSlash = this.path.lastIndexOf("/");
     this.scrNumber=this.path.substring(lastSlash+2);
     console.log(this.scrNumber)
    this.getProgress(this.scrNumber)

    console.log(this.hint)
    //this.reflectionResponses=this.reflectionResponse
    
    console.log(this.reflection,this.reflectionResponse)
  }
  sharedForum(e){
    console.log(e)
    this.shared=e
  }

  confirmShare(){
    this.confirmed=true
  }
 
  
  next(){
    if(this.reflectionResponse)
      this.sendResponse.emit(this.reflectionResponse)
    else{
      this.sendResponse.emit(null)
    }
    //console.log(this.reflectionResponse)
    

  }

  previous(){
    this.goPrevious.emit()

  }
  getProgress(p)
  {
    this.service.screenProgress(p)
    .subscribe(
      r=>{
        this.progress=parseFloat(r)
        console.log(this.progress,"sessionProgress")
      }
    )

  }
  goToToc(){
    this.router.navigate(['/adults/'+this.toc])
  }
  goToDash(){
    this.router.navigate(['/adults/adult-dashboard'])
  }
}
