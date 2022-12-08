import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59133Page } from './s59133.page';

describe('S59133Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59133Page;
  let fixture: ComponentFixture<S59133Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59133Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59133Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
