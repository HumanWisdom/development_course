import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45037Page } from './s45037.page';

describe('S45037Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45037Page;
  let fixture: ComponentFixture<S45037Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45037Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45037Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
