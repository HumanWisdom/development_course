import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53135Page } from './s53135.page';

describe('S53135Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53135Page;
  let fixture: ComponentFixture<S53135Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53135Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53135Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
