import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S140016Page } from './s140016.page';

describe('S140016Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S140016Page;
  let fixture: ComponentFixture<S140016Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S140016Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S140016Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
