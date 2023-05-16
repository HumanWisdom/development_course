import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S60091Page } from './s60091.page';

describe('S60091Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S60091Page;
  let fixture: ComponentFixture<S60091Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S60091Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S60091Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
