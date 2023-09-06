import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S141102Page } from './s141102.page';

describe('S141102Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S141102Page;
  let fixture: ComponentFixture<S141102Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S141102Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S141102Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
