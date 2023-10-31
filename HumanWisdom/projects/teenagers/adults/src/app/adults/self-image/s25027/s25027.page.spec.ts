import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S25027Page } from './s25027.page';

describe('S25027Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S25027Page;
  let fixture: ComponentFixture<S25027Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S25027Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S25027Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
