import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S141066Page } from './s141066.page';

describe('S141066Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S141066Page;
  let fixture: ComponentFixture<S141066Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S141066Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S141066Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
