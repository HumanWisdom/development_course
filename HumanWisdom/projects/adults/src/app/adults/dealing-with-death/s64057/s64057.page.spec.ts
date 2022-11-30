import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S64057Page } from './s64057.page';

describe('S64057Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S64057Page;
  let fixture: ComponentFixture<S64057Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S64057Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S64057Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
