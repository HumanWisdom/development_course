import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S61029Page } from './s61029.page';

describe('S61029Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S61029Page;
  let fixture: ComponentFixture<S61029Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S61029Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S61029Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
