import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59119Page } from './s59119.page';

describe('S59119Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59119Page;
  let fixture: ComponentFixture<S59119Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59119Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59119Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
