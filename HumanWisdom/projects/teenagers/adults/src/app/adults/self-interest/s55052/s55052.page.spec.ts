import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S55052Page } from './s55052.page';

describe('S55052Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S55052Page;
  let fixture: ComponentFixture<S55052Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S55052Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S55052Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
