import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59163Page } from './s59163.page';

describe('S59163Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59163Page;
  let fixture: ComponentFixture<S59163Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59163Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59163Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
