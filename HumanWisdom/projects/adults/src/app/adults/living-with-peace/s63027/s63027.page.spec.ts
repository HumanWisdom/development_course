import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S63027Page } from './s63027.page';

describe('S63027Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S63027Page;
  let fixture: ComponentFixture<S63027Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S63027Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S63027Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
