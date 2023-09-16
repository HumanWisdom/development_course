import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S141012Page } from './s141012.page';

describe('S141012Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S141012Page;
  let fixture: ComponentFixture<S141012Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S141012Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S141012Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
