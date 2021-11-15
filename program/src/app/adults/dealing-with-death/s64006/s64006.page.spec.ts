import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S64006Page } from './s64006.page';

describe('S64006Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S64006Page;
  let fixture: ComponentFixture<S64006Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S64006Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S64006Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
