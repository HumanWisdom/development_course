import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59056Page } from './s59056.page';

describe('S59056Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59056Page;
  let fixture: ComponentFixture<S59056Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59056Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59056Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
