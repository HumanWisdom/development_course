import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S140022Page } from './s140022.page';

describe('S140022Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S140022Page;
  let fixture: ComponentFixture<S140022Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S140022Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S140022Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
