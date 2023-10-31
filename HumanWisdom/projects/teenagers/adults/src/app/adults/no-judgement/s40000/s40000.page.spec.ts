import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S40000Page } from './s40000.page';

describe('S40000Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S40000Page;
  let fixture: ComponentFixture<S40000Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S40000Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S40000Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
