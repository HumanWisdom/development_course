import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S49088Page } from './s49088.page';

describe('S49088Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S49088Page;
  let fixture: ComponentFixture<S49088Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S49088Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S49088Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
