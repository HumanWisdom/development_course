import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S55010Page } from './s55010.page';

describe('S55010Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S55010Page;
  let fixture: ComponentFixture<S55010Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S55010Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S55010Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
