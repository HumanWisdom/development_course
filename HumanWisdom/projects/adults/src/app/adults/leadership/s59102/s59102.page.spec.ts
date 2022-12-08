import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59102Page } from './s59102.page';

describe('S59102Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59102Page;
  let fixture: ComponentFixture<S59102Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59102Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59102Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
