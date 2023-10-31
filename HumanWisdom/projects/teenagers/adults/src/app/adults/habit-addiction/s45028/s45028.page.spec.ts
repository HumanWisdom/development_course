import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45028Page } from './s45028.page';

describe('S45028Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45028Page;
  let fixture: ComponentFixture<S45028Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45028Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45028Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
