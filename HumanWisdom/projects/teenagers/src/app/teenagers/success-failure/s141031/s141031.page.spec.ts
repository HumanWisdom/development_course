import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S141031Page } from './s141031.page';

describe('S141031Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S141031Page;
  let fixture: ComponentFixture<S141031Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S141031Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S141031Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
