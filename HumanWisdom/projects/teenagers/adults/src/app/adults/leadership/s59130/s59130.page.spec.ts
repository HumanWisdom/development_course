import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59130Page } from './s59130.page';

describe('S59130Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59130Page;
  let fixture: ComponentFixture<S59130Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59130Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59130Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
