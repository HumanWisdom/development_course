import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59166Page } from './s59166.page';

describe('S59166Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59166Page;
  let fixture: ComponentFixture<S59166Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59166Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59166Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
