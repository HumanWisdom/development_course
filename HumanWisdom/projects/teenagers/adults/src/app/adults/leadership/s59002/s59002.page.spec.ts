import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59002Page } from './s59002.page';

describe('S59002Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59002Page;
  let fixture: ComponentFixture<S59002Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59002Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59002Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
