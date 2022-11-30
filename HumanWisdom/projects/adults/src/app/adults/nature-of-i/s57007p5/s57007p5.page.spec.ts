import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S57007p5Page } from './s57007p5.page';

describe('S57007p5Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S57007p5Page;
  let fixture: ComponentFixture<S57007p5Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S57007p5Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S57007p5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
