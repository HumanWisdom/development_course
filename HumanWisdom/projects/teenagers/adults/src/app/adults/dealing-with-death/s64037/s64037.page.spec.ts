import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S64037Page } from './s64037.page';

describe('S64037Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S64037Page;
  let fixture: ComponentFixture<S64037Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S64037Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S64037Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
