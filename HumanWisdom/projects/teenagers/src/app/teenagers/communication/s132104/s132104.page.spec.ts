import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132104Page } from './s132104.page';

describe('S132104Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132104Page;
  let fixture: ComponentFixture<S132104Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132104Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132104Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
