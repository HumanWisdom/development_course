import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S61099Page } from './s61099.page';

describe('S61099Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S61099Page;
  let fixture: ComponentFixture<S61099Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S61099Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S61099Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
