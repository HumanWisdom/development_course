import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S140094Page } from './s140094.page';

describe('S140094Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S140094Page;
  let fixture: ComponentFixture<S140094Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S140094Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S140094Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
