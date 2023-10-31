import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S64021Page } from './s64021.page';

describe('S64021Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S64021Page;
  let fixture: ComponentFixture<S64021Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S64021Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S64021Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
