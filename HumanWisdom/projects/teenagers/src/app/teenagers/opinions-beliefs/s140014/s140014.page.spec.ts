import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S140014Page } from './s140014.page';

describe('S140014Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S140014Page;
  let fixture: ComponentFixture<S140014Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S140014Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S140014Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
