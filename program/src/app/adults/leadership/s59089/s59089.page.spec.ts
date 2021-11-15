import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59089Page } from './s59089.page';

describe('S59089Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59089Page;
  let fixture: ComponentFixture<S59089Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59089Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59089Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
