import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59145Page } from './s59145.page';

describe('S59145Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59145Page;
  let fixture: ComponentFixture<S59145Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59145Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59145Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
