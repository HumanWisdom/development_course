import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59107Page } from './s59107.page';

describe('S59107Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59107Page;
  let fixture: ComponentFixture<S59107Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59107Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59107Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
