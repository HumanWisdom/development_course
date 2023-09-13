import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S140020Page } from './s140020.page';

describe('S140020Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S140020Page;
  let fixture: ComponentFixture<S140020Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S140020Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S140020Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
