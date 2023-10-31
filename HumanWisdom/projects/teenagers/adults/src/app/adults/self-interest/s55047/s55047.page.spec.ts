import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S55047Page } from './s55047.page';

describe('S55047Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S55047Page;
  let fixture: ComponentFixture<S55047Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S55047Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S55047Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
