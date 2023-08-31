import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S140001Page } from './s140001.page';

describe('S140001Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S140001Page;
  let fixture: ComponentFixture<S140001Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S140001Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S140001Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
