import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59033Page } from './s59033.page';

describe('S59033Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59033Page;
  let fixture: ComponentFixture<S59033Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59033Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59033Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
