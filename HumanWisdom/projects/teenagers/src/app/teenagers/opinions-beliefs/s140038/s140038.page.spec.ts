import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S140038Page } from './s140038.page';

describe('S140038Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S140038Page;
  let fixture: ComponentFixture<S140038Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S140038Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S140038Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
