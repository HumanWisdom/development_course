import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S57010Page } from './s57010.page';

describe('S57010Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S57010Page;
  let fixture: ComponentFixture<S57010Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S57010Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S57010Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
