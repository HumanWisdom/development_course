import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45108Page } from './s45108.page';

describe('S45108Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45108Page;
  let fixture: ComponentFixture<S45108Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45108Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45108Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
