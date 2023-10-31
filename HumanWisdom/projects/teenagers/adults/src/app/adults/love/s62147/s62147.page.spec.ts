import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62147Page } from './s62147.page';

describe('S62147Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62147Page;
  let fixture: ComponentFixture<S62147Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62147Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62147Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
