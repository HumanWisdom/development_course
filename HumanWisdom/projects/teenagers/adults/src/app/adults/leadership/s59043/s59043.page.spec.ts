import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59043Page } from './s59043.page';

describe('S59043Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59043Page;
  let fixture: ComponentFixture<S59043Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59043Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59043Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
