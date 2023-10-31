import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S46037Page } from './s46037.page';

describe('S46037Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S46037Page;
  let fixture: ComponentFixture<S46037Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S46037Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S46037Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
