import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S140035Page } from './s140035.page';

describe('S140035Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S140035Page;
  let fixture: ComponentFixture<S140035Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S140035Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S140035Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
