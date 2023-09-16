import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S141022Page } from './s141022.page';

describe('S141022Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S141022Page;
  let fixture: ComponentFixture<S141022Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S141022Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S141022Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
