import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S57031Page } from './s57031.page';

describe('S57031Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S57031Page;
  let fixture: ComponentFixture<S57031Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S57031Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S57031Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
