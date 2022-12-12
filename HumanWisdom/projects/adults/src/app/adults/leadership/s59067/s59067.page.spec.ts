import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59067Page } from './s59067.page';

describe('S59067Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59067Page;
  let fixture: ComponentFixture<S59067Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59067Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59067Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
