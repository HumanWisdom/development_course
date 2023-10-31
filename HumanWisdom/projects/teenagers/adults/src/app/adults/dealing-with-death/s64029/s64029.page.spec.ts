import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S64029Page } from './s64029.page';

describe('S64029Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S64029Page;
  let fixture: ComponentFixture<S64029Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S64029Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S64029Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
