import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45104Page } from './s45104.page';

describe('S45104Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45104Page;
  let fixture: ComponentFixture<S45104Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45104Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45104Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
