import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59114Page } from './s59114.page';

describe('S59114Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59114Page;
  let fixture: ComponentFixture<S59114Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59114Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59114Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
