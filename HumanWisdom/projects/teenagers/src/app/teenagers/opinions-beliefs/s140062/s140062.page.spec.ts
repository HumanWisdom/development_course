import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S140062Page } from './s140062.page';

describe('S140062Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S140062Page;
  let fixture: ComponentFixture<S140062Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S140062Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S140062Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
