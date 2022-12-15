import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S38000Page } from './s38000.page';

describe('S38000Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S38000Page;
  let fixture: ComponentFixture<S38000Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S38000Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S38000Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
